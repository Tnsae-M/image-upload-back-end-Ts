//import assets used for book operations
import { Book } from "../models/book";
import addBook from "../controllers/books/add_Book";
import useAuth from "../middleware/authMiddleWare";
import searchBook from "../controllers/books/read_book";
import { Router } from "express";
import express from "express";
//create a router
const router: Router = express.Router();
//create the book logic routes
//add book route
router.post("/book/add", useAuth, addBook);
router.post("/book/search", useAuth, searchBook);

//export router to app.ts
export default router;
