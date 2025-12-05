//import assets used for book operations
import { Book } from "../models/book";
import addBook from "../controllers/add_Book";
import useAuth from "../middleware/authMiddleWare";
import { Router } from "express";
import express from "express";
//create a router
const router: Router = express.Router();
//create the book logic routes
//add book route
router.post("/addBook", useAuth, addBook);

//export router to app.ts
export default router;
