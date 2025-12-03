import { jwtPayLoad } from "./middleware/authMiddleWare";
//declare user within Jwtpayload
declare global {
  namespace Express {
    interface Request {
      user?: jwtPayLoad;
    }
  }
}
export {};
