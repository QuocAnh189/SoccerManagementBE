import mongoose from 'mongoose';
import { exit } from 'process';

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI!);
    return connect;
  } catch (error) {
    console.log(error);
    exit(1);
  }
};
