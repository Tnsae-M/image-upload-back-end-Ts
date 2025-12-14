import { Express, Request, Response } from "express";
import express from "express";
// import "dotenv/config";
import { connectToDbMdb } from "./config/db/db";
import { User } from "./models/User";
//import routes
import homeRouter from "./routes/homepage";
import authRouter from "./routes/auth_routes";
import bookRouter from "./routes/book_routes";
import errorHandler from "./middleware/error.handler";
//call connection to DB
connectToDbMdb();
//create an express app
const app: Express = express();
//parse json
app.use(express.json());
//configure routes
app.use("/api/home", homeRouter);
app.use("/api/auth", authRouter);
app.use("/api/book", bookRouter);
//error route
app.use(errorHandler);
//export app to server
export default app;
