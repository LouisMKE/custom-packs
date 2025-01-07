import { AuthenticatedRequest } from '../types/express';
import { Response } from 'express';
import User from '../models/User';

export const getUserProfile = async (req: AuthenticatedRequest, res: Response): Promise<Response | void> => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const user = await User.findById(userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const getSavedPacks = async (req: AuthenticatedRequest, res: Response): Promise<Response | void> => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const user = await User.findById(userId).populate('savedPacks');
    if (!user) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json(user.savedPacks);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const savePack = async (req: AuthenticatedRequest, res: Response): Promise<Response | void> => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const { packId, title, description, link } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { savedPacks: { packId, title, description, link } } },
      { new: true, runValidators: true }
    );

    if (!updatedUser) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};
