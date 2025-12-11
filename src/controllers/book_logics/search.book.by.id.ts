//import assets
import { Book } from "../../models/book";
import { Request, Response } from "express";
//create search book by id function
async function searchBookById(req: Request, res: Response): Promise<void> {
  try {
    //get id from params
    const { id } = req.params;
    //find book by id
    const findBookById = await Book.findById(id);
    //handle error when book doesn't exist
    if (!findBookById) {
      res.status(404).json({
        status: "failed",
        message: "Book not found! please check the id and try again.",
      });
      return;
    }
    res.status(201).json({
      status: "success",
      message: "Book found!",
      Book: findBookById,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong! please check with your service provider.",
    });
  }
}
export default searchBookById;
