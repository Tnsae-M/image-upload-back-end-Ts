//import assets
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app.error";
import dotenv from "dotenv";
dotenv.config();
function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  //log error for debugging
  console.error(err);
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: "failed",
      message: err.message,
    });
  }
  const isDev = process.env.node_env !== "development";
  const payload: any = {
    status: "failed",
    message: "Internal server error! something went wrong.",
  };
  if (isDev) {
    payload.error = err?.message;
    payload.stack = err?.stack;
  }
  //programmer error is reported here
  return res.status(500).json(payload);
}
export default errorHandler;
