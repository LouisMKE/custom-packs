import { Request, Response } from 'express';
import packSchema, { PackDocument } from '../models/Pack';
import mongoose from 'mongoose';

const Pack = mongoose.model<PackDocument>('Pack', packSchema);

export const getAllPacks = async (_: Request, res: Response): Promise<Response | void> => {
  try {
    const packs = await Pack.find();
    return res.status(200).json(packs);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const createPack = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { packId, title, description, link } = req.body;

    const newPack = new Pack({ packId, title, description, link });
    await newPack.save();

    return res.status(201).json(newPack);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
};

export const deletePack = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { id } = req.params;

    const deletedPack = await Pack.findByIdAndDelete(id);
    if (!deletedPack) {
      return res.status(404).json({ message: 'Pack not found' });
    }

    return res.status(200).json({ message: 'Pack deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const getPackById = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { id } = req.params;

    const pack = await Pack.findById(id);
    if (!pack) {
      return res.status(404).json({ message: 'Pack not found' });
    }

    return res.status(200).json(pack);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};
