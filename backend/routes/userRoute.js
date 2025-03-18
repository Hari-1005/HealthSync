import express from "express";
import {
  bookAppointment,
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
userRouter.post("/book-appointment", authUser, bookAppointment)

export default userRouter;
