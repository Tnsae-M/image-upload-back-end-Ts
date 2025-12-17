//import assets
import { Book } from "../../models/book";
import { AppError } from "../../errors/app.error";
import { Request, Response, NextFunction } from "express";

//create a update book function
async function updateBook(req: Request, res: Response, next: NextFunction) {
  try {
    //get id from params
    const { id } = req.params;
    const { title, author, publish_Date } = req.body;

    //search for book in DB
    const bookToUpdate = await Book.findByIdAndUpdate(
      id,
      { title: title, author: author, publish_Date: publish_Date },
      { new: true }
    );
    if (!bookToUpdate) {
      throw new AppError(404, "Book to update is not found.");
    }
    res.status(200).json({
      status: "success",
      message: "Book updated successfully",
      Book: bookToUpdate,
    });
  } catch (e) {
    next(e);
  }
}
export default updateBook;
