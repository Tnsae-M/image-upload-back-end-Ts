//import assets used for book operations
import addBook from "../controllers/book_logics/add_Book";
import useAuth from "../middleware/authMiddleWare";
import searchBook from "../controllers/book_logics/read_book";
import deleteBook from "../controllers/book_logics/delete_book";
import { Router } from "express";
import express from "express";
import listAllBooks from "../controllers/book_logics/list.all.book";
//create a router
const router: Router = express.Router();
//create the book logic routes
//add book route
router.post("/add", useAuth, addBook);
router.post("/search", useAuth, searchBook);
router.get("/list", useAuth, listAllBooks);
router.delete("/delete/:id", useAuth, deleteBook);

//export router to app.ts
export default router;
