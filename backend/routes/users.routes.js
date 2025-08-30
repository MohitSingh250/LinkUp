import { Router } from "express";
import { addToHistory, getUserHistory, login, register } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/add_to_activity", addToHistory);
userRouter.get("/get_all_activity", getUserHistory);

export default userRouter;