//import assets
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app.error";

function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const isDev = process.env.NODE_ENV !== "production";

  // If headers already sent, delegate to default express handler
  if (res.headersSent) return next(err as any);

  // Log error only in non-production environments
  if (isDev) console.error(err);

  // Handle known operational errors
  if (err instanceof AppError && err.isOperational) {
    return res.status(err.statusCode ?? 500).json({
      status: "failed",
      message: err.message,
    });
  }

  // Unknown / programmer errors: don't leak details in production
  const payload: any = {
    status: "failed",
    message: "Internal server error! something went wrong.",
  };

  if (isDev) {
    if (err && typeof err === "object") {
      payload.error = (err as any).message ?? String(err);
      payload.stack = (err as any).stack;
    } else {
      payload.error = String(err);
    }
  }

  return res.status(500).json(payload);
}

export default errorHandler;
