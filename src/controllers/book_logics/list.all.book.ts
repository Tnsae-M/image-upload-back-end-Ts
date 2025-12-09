//import assets
import { Book } from "../../models/book";
import { Request, Response } from "express";

//create the list all books function
async function listAllBooks(req: Request, res: Response): Promise<void> {
  try {
    //retrieve all books from DB
    const ListOfAllBooks = await Book.find({});
    //check if list works
    if (!ListOfAllBooks) {
      res.status(404).json({
        status: "failed",
        message: "List is empty. please add atleast 1 book.",
      });
      return;
    }
    //send success response
    res.status(200).json({
      status: "success",
      message: "book list retrieved successfully.",
      List: { "Book List": ListOfAllBooks },
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong! please contact your service provider.",
    });
    console.log(e);
  }
}
export default listAllBooks;
