import jwt from 'jsonwebtoken';
import User from '../models/User';
import { Request, Response } from 'express';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '1h' });
};

export const registerUser = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Email or username is already registered' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    const token = generateToken(newUser.id);
    return res.status(201).json({ token, user: newUser });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await user.isCorrectPassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken(user.id);
    return res.status(200).json({ token, user });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};
