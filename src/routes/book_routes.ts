//import assets used for book operations
import { Router } from "express";
import express from "express";
import addBook from "../controllers/book_logics/add_Book";
import useAuth from "../middleware/authMiddleWare";
import searchBook from "../controllers/book_logics/read_book";
import deleteBook from "../controllers/book_logics/delete_book";
import listAllBooks from "../controllers/book_logics/list.all.book";
import searchBookById from "../controllers/book_logics/search.book.by.id";
import searchByAuthorAndTitle from "../controllers/book_logics/find.by.author.or.title";
import updateBook from "../controllers/book_logics/update.book";
//create a router
const router: Router = express.Router();
//create the book logic routes
//add book route
router.post("/add", useAuth, addBook);
router.post("/search", useAuth, searchBook);
router.get("/list", useAuth, listAllBooks);
router.get("/books", useAuth, searchByAuthorAndTitle);
router.delete("/delete/:id", useAuth, deleteBook);
router.get("/search/:id", useAuth, searchBookById);
router.patch("/update/:id", useAuth, updateBook);

//export router to app.ts
export default router;
