//create a class to handle errors
export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  constructor(statusCode: number, message: string, isOperational = true) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
