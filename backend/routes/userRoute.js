import express from "express";
import {
  getUser,
  login,
  register,
  updateUser,
} from "../controllers/userController.js";
import { authUser } from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/get-profile", authUser, getUser);
userRouter.post(
  "/update-profile",
  upload.single("image"),
  authUser,
  updateUser
);

export default userRouter;
