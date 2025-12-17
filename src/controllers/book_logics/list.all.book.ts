//import assets
import { AppError } from "../../errors/app.error";
import { Book } from "../../models/book";
import { NextFunction, Request, Response } from "express";

//create the list all books function
async function listAllBooks(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    //retrieve all books from DB
    const ListOfAllBooks = await Book.find({});
    //check if list works
    if (!ListOfAllBooks) {
      throw new AppError(
        404,
        "there is not book to show. please add a book and try again."
      );
      return;
    }
    //send success response
    res.status(200).json({
      status: "success",
      message: "book list retrieved successfully.",
      List: { "Book List": ListOfAllBooks },
    });
  } catch (e) {
    next(e);
  }
}
export default listAllBooks;
