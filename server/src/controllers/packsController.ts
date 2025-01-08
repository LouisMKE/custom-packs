import Pack from '../models/Pack';

// Get All Packs
export const getAllPacks = async (_req: any, res: any) => {
  try {
    const packs = await Pack.find();
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Create a New Pack
export const createPack = async (req: any, res: any) => {
  try {
    const { title, theme, items, createdBy } = req.body;

    const newPack = new Pack({ title, theme, items, createdBy });
    await newPack.save();

    res.status(201).json(newPack);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Delete a Pack
export const deletePack = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    await Pack.findByIdAndDelete(id);
    res.status(200).json({ message: 'Pack deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};