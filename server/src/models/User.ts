import { Schema, model, type Document } from 'mongoose';
import bcrypt from 'bcrypt';

import packSchema from './Pack.js';
import type { PackDocument } from './Pack.js';

export interface UserDocument extends Document {
  id: string;
  username: string;
  email: string;
  password: string;
  savedPacks: PackDocument[];
  isCorrectPassword(password: string): Promise<boolean>;
  packCount: number;
}

const userSchema = new Schema<UserDocument>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },

    savedPacks: [packSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

// Number of packs we have
userSchema.virtual('packCount').get(function () {
  return this.savedPacks.length;
});

const User = model<UserDocument>('User', userSchema);

export default User;