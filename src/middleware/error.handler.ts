//import assets
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app.error";
function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  //check if headers already exist
  if (res.headersSent) return next(err);
  //log error for debugging
  console.error(err);
  if (err instanceof AppError && err.isOperational) {
    return res.status(err.statusCode).json({
      status: "failed",
      message: err.message,
    });
  }
  const isDev = process.env.NODE_ENV !== "production";
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
