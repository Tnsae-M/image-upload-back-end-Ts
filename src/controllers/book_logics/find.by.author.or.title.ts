//import assets
import { Book } from "../../models/book";
import { Request, Response } from "express";
//create the search by author function
async function searchByAuthorAndTitle(
  req: Request,
  res: Response
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
      res.status(404).json({
        status: "failed",
        message: `Books with given data doesn't exist. please change and try again. `,
      });
      return;
    }
    res.status(200).json({
      status: "success",
      message: `Books with given data are found!`,
      Books: books,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong!",
    });
    console.log(e);
  }
}
export default searchByAuthorAndTitle;
