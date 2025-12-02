//import assets required for schema
import mongoose, { Document, Schema, Types } from "mongoose";
import { User, UserInt } from "./User";
import { timeStamp } from "console";
//define interface for typescript.
interface bookInt extends Document {
  _id: Types.ObjectId;
  title: string;
  author: string;
  publish_Date: Date;
  borrowed_by: Types.ObjectId | UserInt | null;
}
//create schema for book
const bookSchema: Schema<bookInt> = new Schema({
  //_id is created automatically by mongoDB.
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  //Date=?
  borrowed_by: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
});

export const Book = mongoose.model("Book", bookSchema);
