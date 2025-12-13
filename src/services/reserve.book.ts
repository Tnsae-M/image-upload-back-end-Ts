//import assets
import { Book } from "../models/book";
import { User } from "../models/User";
import { Request, Response } from "express";
//create reserve a book function
async function reserveBook(req: Request, res: Response) {
  try {
    //recieve id from params
    const { id } = req.params;
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: "Something went wrong. please check with your service provider.",
    });
    console.log(e);
  }
}
