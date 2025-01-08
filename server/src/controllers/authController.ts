import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
};

export const registerUser = async (req: any, res: any) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Generate a token for the new user
    const token = generateToken(newUser._id);

    res.status(201).json({ message: 'User registered successfully', token, user: newUser });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// User Login
export const loginUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    // Generate JWT
    const token = generateToken(user._id);

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Verify Token
export const verifyToken = async (req: any, res: any) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    const verified = jwt.verify(token, JWT_SECRET);
    res.status(200).json({ valid: true, user: verified });
  } catch (error) {
    res.status(403).json({ valid: false, message: 'Invalid token.' });
  }
};