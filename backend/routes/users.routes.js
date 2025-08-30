const { Router }  =  require("express")
const { addToHistory, getUserHistory, login, register } = require("../controllers/user.controller.js")
const {authMiddleWare} = require("../middlewares/authmiddleware.js")
const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/add_to_activity",authMiddleWare, addToHistory);
userRouter.get("/get_all_activity",authMiddleWare, getUserHistory);

module.exports = {
    userRouter
}