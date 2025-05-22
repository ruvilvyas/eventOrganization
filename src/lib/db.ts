// lib/db.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables.");
}

let isConnected: boolean = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      dbName: "foodiesta",
    });
    isConnected = true;
    console.log("✅ MongoDB connected:", db.connection.host);
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    throw err;
  }
};

export default connectDB;
