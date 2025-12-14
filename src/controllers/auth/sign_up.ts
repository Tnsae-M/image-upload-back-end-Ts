//import users
import { User, UserInt } from "../../models/User";
import { Response, Request, NextFunction } from "express";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/app.error";
//create sign_up function
async function signUpUser(
  req: Request<{}, {}, UserInt>,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    //extract user info from request.
    const { userName, password, role, email } = req.body;
    // check if user is already signed in or not.
    const checkUser = await User.findOne({ $or: [{ userName }, { email }] });
    if (checkUser) {
      throw new AppError(
        401,
        "username or email already exists.Please change your credential and try again."
      );
      return;
    }
    //hash users password
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    //create new user and save it
    const newUser = await User.create({
      userName,
      password: hash,
      email,
      role: role || "user",
    });
    // await newUser.save();
    //check if error occured while creating user
    if (!newUser) {
      throw new AppError(
        401,
        "Error occured when creating user! please check your information and try again."
      );
      return;
    }
    res.status(201).json({
      status: "successfull",
      message: "User created successfully.",
      user: newUser,
    });
  } catch (e) {
    next(e);
  }
}
export default signUpUser;
//continue from here to route
