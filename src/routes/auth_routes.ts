//import assets and types
import express from "express";
import { Router } from "express";
//import controllers
import signUpUser from "../controllers/auth/sign_up";
import signInUser from "../controllers/auth/sign_in";
import useAuth from "../middleware/authMiddleWare";

//create router
const router: Router = express.Router();
//create route
router.post("/signup", signUpUser);
router.post("/signin", signInUser);
router.get("/profile", useAuth, (req, res) => {
  res.status(200).json({
    status: "successfull",
    message: "Profile Page",
    user: (req as any).user, //set by useAuth midWare
  });
});

//export the router
export default router;
