//import assets
import { Book, bookInt } from "../../models/book";
import { NextFunction, Request, Response } from "express";
import { User } from "../../models/User";
import { AppError } from "../../errors/app.error";
//create an interface for user type

//create the add a book function
async function addBook(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    //import userID and userName from auth
    const user = (req as any).user;
    const userIdAddBook = user.userId;
    //parse book info from req.body
    const { title, author, _id, publish_Date } = req.body;
    //find the user
    const bookAddingUser = User.findById(userIdAddBook);
    //check user
    if (!bookAddingUser) {
      throw new AppError(
        404,
        "User not found. please change Id and try again."
      );
      return;
    }
    const checkBook = await Book.findOne({ title });
    if (checkBook) {
      throw new AppError(401, "Book with this title exists");
      return;
    }
    //create and add new book
    const newBook: bookInt = await Book.create({
      id: _id,
      title: title,
      author: author,
      publish_Date: publish_Date,
      addedBy: userIdAddBook,
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
    next(e);
  }
}
export default addBook;
