//import assets
import { JwtPayload } from "../middleware/auth";
import { Book, bookInt } from "../models/book";
import { Request, Response } from "express";
import { User } from "../models/User";
//create an interface for user type

//create the add a book function
async function addBook(
  req: Request<{}, {}, bookInt> & { user?: JwtPayload },
  res: Response
): Promise<void> {
  try {
    //import userID and userName from auth
    const user = (req as any).user;
    const userId = user._id;
    console.log(userId);
    //parse book info from req.body
    const { title, author, _id, publish_Date } = req.body;
    //find the user
    const bookAddingUser = User.findById(userId);
    //check user
    if (!bookAddingUser) {
      res.status(401).json({
        status: "failed",
        message: "user not found. please check Id and try again.",
      });
      return;
    }
    //create and add new book
    const newBook: bookInt = await Book.create({
      id: _id,
      title: title,
      author: author,
      publish_Date: publish_Date,
      addedBy: userId,
    });
    if (!newBook) {
      res.status(401).json({
        status: "failed",
        message: "Something went wrong when adding book.",
      });
      return;
    }
    res.status(201).json({
      status: "success",
      message: "book added successfully.",
      book: newBook,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong. please contact your service provider.",
    });
    console.log(e);
  }
}
export default addBook;
