//import assets
import { AppError } from "../../errors/app.error";
import { Book } from "../../models/book";
import { NextFunction, Request, Response } from "express";
//create search book by id function
async function searchBookById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    //get id from params
    const { id } = req.params;
    //find book by id
    const findBookById = await Book.findById(id);
    //handle error when book doesn't exist
    if (!findBookById) {
      throw new AppError(
        404,
        "Book not found. please check your Id and try again."
      );
      return;
    }
    res.status(201).json({
      status: "success",
      message: "Book found!",
      Book: findBookById,
    });
  } catch (e) {
    next(e);
  }
}
export default searchBookById;
