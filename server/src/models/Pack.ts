import { Schema, type Document } from 'mongoose';

export interface PackDocument extends Document {
  packId: string;
  title: string;
  description: string;
  link: string;
}


const packSchema = new Schema<PackDocument>({

  description: {
    type: String,
    required: true,
  },

  packId: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

export default packSchema;
