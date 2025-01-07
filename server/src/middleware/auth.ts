import jwt from 'jsonwebtoken';
import { AuthenticatedRequest } from '../types/express';
import { Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Access denied. No token provided.' });
    return;
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      res.status(403).json({ message: 'Invalid token.' });
      return;
    }

    req.user = user as { id: string };
    next();
  });
};
