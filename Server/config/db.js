import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGO_URI;
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`mongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
