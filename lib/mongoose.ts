import mongoose from 'mongoose';
import { MONGODB_URI } from '@/utils/constants/string.constants';

const connectDB = async (): Promise<boolean | undefined>  => {
  if (!MONGODB_URI) {
    console.log('🔴 MONGODB_URI is not defined.');
    return;
  }

  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`🟢 MongoDB connected.`);
  } catch (error) {
    console.log(`🔴 "${error}".`);
  }
};

export default connectDB;
