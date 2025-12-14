//import assets
import jwt from "jsonwebtoken";
// import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "./auth";
import { AppError } from "../errors/app.error";

const secret_key = process.env.Jwt_secret_key as string;
async function useAuth(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  //extract info from header
  const authHeader = req.headers["authorization"];
  //apply the same logic of jwt.sign, where undefined is overruled as output type.
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new AppError(401, "invalid token or credential.");
    return;
  }
  //parse token from authHeader
  const token = authHeader.split(" ")[1];
  if (!token) {
    throw new Error("error occured while spliting token!");
  }
  try {
    //now decode the token
    const decodedToken = jwt.verify(token, secret_key) as JwtPayload;
    //use the decoded token
    (req as any).user = decodedToken;
    // console.log("middleware token: ", decodedToken);
    //allow the next function to takeover
    next();
  } catch (e) {
    next(e);
  }
}
export default useAuth;
