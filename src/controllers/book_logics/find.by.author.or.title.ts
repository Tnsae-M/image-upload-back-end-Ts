//import assets
import { Book } from "../../models/book";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/app.error";
//create the search by author function
async function searchByAuthorAndTitle(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { title, author } = req.query;
    //create filter
    const filter: { author?: any; title?: any } = {};
    if (author) filter.author = { $regex: author, $options: "i" };
    if (title) filter.title = { $regex: title, $options: "i" };
    const books = await Book.find(filter);
    //check if no such book exists
    if (!books) {
      throw new AppError(
        404,
        "Books with given title or author is not found. please check and try again."
      );
      return;
    }
    res.status(200).json({
      status: "success",
      message: `Books with given data are found!`,
      Books: books,
    });
  } catch (e) {
    next(e);
  }
}
export default searchByAuthorAndTitle;
