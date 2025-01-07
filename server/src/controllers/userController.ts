import type { Request, Response } from 'express';
// import user model
import User from '../models/User.js';
// import sign token function from auth

// Get User Profile
export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id; // Assuming req.user is set by auth middleware
    const user = await User.findById(userId).select('-password');
    if (!user){
      return res.status(404).json({ message: 'User not found' }); 
    } 

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Can't Find Path" });
  }
};

// Update User Profile
export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const { username, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, email },
      { new: true }
    ).select('-password');

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: "Can't Find Path" });
  }
};
