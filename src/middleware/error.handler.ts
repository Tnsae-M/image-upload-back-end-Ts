//import assets
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app.error";
function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  //log error for debugging
  console.log(err);
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: "failed",
      message: err.message,
    });
  } //programmer error is reported here
  return res.status(500).json({
    status: "failed",
    message: "Something went wrong.",
  });
}
export default errorHandler;
