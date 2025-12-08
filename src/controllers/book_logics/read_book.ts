//import assets for reading a book
import { Book, bookInt } from "../../models/book";
import { Request, Response } from "express";

//create the read book fuunction
async function searchBook(req: Request, res: Response): Promise<void> {
  try {
    //take the book name from req.body
    const { title } = req.body;
    const checkBook = await Book.findOne({ title });
    if (!checkBook) {
      res.status(404).json({
        status: "failed.",
        message: `There is no book called ${title}! please check the title and try again.`,
      });
      return;
    }
    res.status(200).json({
      status: "success",
      message: "",
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong. please check with your service provider!",
    });
    console.log(e);
  }
}
//export the function
export default searchBook;
