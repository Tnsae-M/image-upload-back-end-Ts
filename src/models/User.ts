//import mongoose and other assets
import mongoose, { Document, Schema, Types } from "mongoose";
//create interface before schema to make type def easier
export interface UserInt extends Document {
  _id: Types.ObjectId;
  userName: string;
  email: string;
  password: string;
  // age: Number;
  role: string;
  createdAt: Date;
}
//use interface in schema to simplify type
const userSchema: Schema<UserInt> = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      KmaxLength: [50, "username is too long. try a shorter one."],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // age: {
    //   required: true,
    //   type: Number,
    // },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);
//export User model
export const User = mongoose.model("User", userSchema);
export type UserId = Types.ObjectId;
