//import assets
import { AppError } from "../../errors/app.error";
import { Book } from "../../models/book";
import { NextFunction, Request, Response } from "express";

//create delete function
async function deleteBook(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    //import id from req
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      throw new AppError(
        404,
        "The book to delete is not found. please check and try again."
      );
      return;
    }
    res.status(200).json({
      status: "success",
      message: "Book deleted Successfully.",
      Book: deletedBook,
    });
  } catch (e) {
    next(e);
  }
}
export default deleteBook;
