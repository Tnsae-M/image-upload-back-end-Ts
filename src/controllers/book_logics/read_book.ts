//import assets for reading a book
import { AppError } from "../../errors/app.error";
import { Book, bookInt } from "../../models/book";
import { NextFunction, Request, Response } from "express";

//create the read book fuunction
async function searchBook(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    //take the book name from req.body
    const { title } = req.body;
    const checkBook = await Book.findOne({ title });
    if (!checkBook) {
      throw new AppError(404, `There is no book with the title ${title}.`);
      return;
    }
    res.status(200).json({
      status: "success",
      message: "book found successfully.",
      Book: checkBook,
    });
  } catch (e) {
    next(e);
  }
}
//export the function
export default searchBook;
