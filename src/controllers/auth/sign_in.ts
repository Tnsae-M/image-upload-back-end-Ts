//import assets required for signing in user
import { User, UserInt, UserId } from "../../models/User";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import { Request, Response } from "express";
//create async function for signing in a user
async function singInUser(
  req: Request<{}, {}, UserInt>,
  res: Response
): Promise<void> {
  try {
    //recieve input from request body
    const { userName, email, password } = req.body;
    //empty email/username and pasword handler
    if ((!email && !userName) || !password) {
      res.status(400).json({
        status: "failed",
        message: "email or username and password are required",
      });
      return;
    }
    //apply checkUser logic again
    const checkUser = await User.findOne({ $or: [{ userName }, { email }] });
    //condtional where invaild if user doesn't exist.
    if (!checkUser) {
      res.status(401).json({
        status: "failed",
        message:
          "invalid credentials! please try again after changing your credentials.",
      });
      return;
    }
    //if user exists, check if the password is correct.
    const checkPassword = await bcrypt.compare(password, checkUser.password);
    //condition where invalid if password is incorrect.
    if (!checkPassword) {
      res.status(401).json({
        status: "failed.",
        message: "password is incorrect. please change password and try again!",
      });
      return;
    }
    //now if password is coreect,create token(bearer) for user
    //create var for jwt secret key
    const jwt_secret_key = process.env.Jwt_secret_key;
    if (!jwt_secret_key) {
      throw new Error(
        "jwt_secret_key is not defined as env variable. define it and try again"
      );
      return;
    }
    //or just blindly assume that jwt_secret_key as string in the payload of jwt.sign.
    // console.log(checkUser._id.toString());
    const accessToken: string = Jwt.sign(
      {
        userId: checkUser._id.toString(),
        userName: checkUser.userName,
        email: checkUser.email,
        role: checkUser.role,
      },
      jwt_secret_key,
      { expiresIn: "1h" }
    );
    //send the response where user is signed in successfully.
    res.status(200).json({
      status: "successful",
      message: `sign in sucessfull. welcome ${checkUser.userName}`,
      accessToken,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong. please check console",
    });
    console.log(e);
  }
}
export default singInUser;
