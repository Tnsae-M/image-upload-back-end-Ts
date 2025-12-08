//import assets
import { Book } from "../../models/book";
import { Request, Response } from "express";

//create delete function
async function deleteBook(req: Request, res: Response): Promise<void> {
  try {
    //import id from req
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      res.status(404).json({
        status: "failed",
        message: "book not found. please try a different id.",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      message: "Book deleted Successfully.",
      Book: deletedBook,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong. please check with your service provider.",
    });
    console.log(e);
  }
}
export default deleteBook;
