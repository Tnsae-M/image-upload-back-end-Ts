//import users
import { User, UserInt } from "../../models/User";
import { Response, Request } from "express";
import bcrypt from "bcrypt";
//create sign_up function
async function signUpUser(
  req: Request<{}, {}, UserInt>,
  res: Response
): Promise<void> {
  try {
    //extract user info from request.
    const { userName, password, role, email } = req.body;
    // check if user is already signed in or not.
    const checkUser = await User.findOne({ $or: [{ userName }, { email }] });
    if (checkUser) {
      res.status(400).json({
        status: "failed",
        message: "username or email already exists. change to a different one.",
      });
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
      res.status(401).json({
        status: "failed",
        message: "error occured when signing up. please try again.",
      });
      return;
    }
    res.status(201).json({
      status: "successfull",
      message: "User created successfully.",
      user: newUser,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong! check error on the console.",
    });
    console.log(e);
  }
}
export default signUpUser;
//continue from here to route
