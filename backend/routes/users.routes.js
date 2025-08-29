import { Router } from "express";
import { addToHistory, getUserHistory, login, register } from "../controllers/user.controller.js";



const userRouter = Router();

userRouter.route("/login").post(login)
userRouter.route("/register").post(register)
userRouter.route("/add_to_activity").post(addToHistory)
userRouter.route("/get_all_activity").get(getUserHistory)

export default userRouter;