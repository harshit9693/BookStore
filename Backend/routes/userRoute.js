import express from "express"
import { loginUser,registerUser } from "../controllers/userController.js"


const userRouter = express.Router();

userRouter.post("/register",registerUser)   //making "/register" as the end point
userRouter.post("/login",loginUser)         //making "/login" as the end point

export default userRouter;