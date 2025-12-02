//import assets and types
import express from "express";
import { Router } from "express";
//import controllers
import signUpUser from "../controllers/auth/sign_up";
import signInUser from "../controllers/auth/sign_in";

//create router
const router: Router = express.Router();
//create route
router.post("/signup", signUpUser);
router.post("/signin", signInUser);

//export the router
export default router;
