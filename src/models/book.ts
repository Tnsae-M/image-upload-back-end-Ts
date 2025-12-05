//import assets required for schema
import mongoose, { Document, Schema, Types } from "mongoose";
import { User, UserInt } from "./User";
//define interface for typescript.
export interface bookInt extends Document {
  _id: Types.ObjectId;
  title: string;
  author: string;
  publish_Date: string;
  addedBy: Types.ObjectId;
}
//create schema for book
const bookSchema: Schema<bookInt> = new mongoose.Schema({
  //_id is created automatically by mongoDB.
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  publish_Date: {
    type: String,
    required: true,
    trim: true,
  },
  addedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Book = mongoose.model("Book", bookSchema);
const BookId = Types.ObjectId;
