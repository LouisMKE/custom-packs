import jwt from 'jsonwebtoken';
import type { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

// Middleware to Authenticate Token
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract token from the Bearer token header

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    // Verify the token
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err){
        return res.status(403).json({ message: 'Invalid token.' });
      } 
      req.user = user; // Attach user information to the request object
      next(); // Continue to the next middleware or route handler
      return;
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' });
  }
  return;
};

// Middleware to Protect Admin Routes (Example)
export const authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
    next();
    return;
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
