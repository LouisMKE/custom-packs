import Pack from '../models/Pack';
import type { Request, Response } from 'express';

// Get All Packs
export const getAllPacks = async (req: Request, res: Response) => {
  try {
    const packs = await Pack.find();
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ message: "Can't Find Path"});
  }
};

// Create a New Pack
export const createPack = async (req: Request, res: Response) => {
  try {
    const { title, theme, items, createdBy } = req.body;

    const newPack = new Pack({ title, theme, items, createdBy });
    await newPack.save();

    res.status(201).json(newPack);
  } catch (error) {
    res.status(400).json({ message: "Can't Find Path"});
  }
};

// Delete a Pack
export const deletePack = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await Pack.findByIdAndDelete(id);
    res.status(200).json({ message: 'Pack deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: "Can't Find Path"});
  }
};
