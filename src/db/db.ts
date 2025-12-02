//import mongodb
import mongoose from "mongoose";
import "dotenv/config";

//create connection
async function connectToDbMdb(): Promise<void> {
  const mongoUrl = process.env.Mongo_Url;
  if (!mongoUrl) {
    // Fail fast - caller can decide how to handle startup failure
    throw new Error("Missing environment variable: Mongo_Url");
  }
  try {
    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected successfully.");
  } catch (er) {
    console.log("mongoose not connected! err=> ", er);
  }
}
export { connectToDbMdb };
