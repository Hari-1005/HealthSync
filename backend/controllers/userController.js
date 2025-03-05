import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

//--Api to register user--//
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing details" });
    }

    //check if email is valid
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    //check if password is strong enough
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be strong enough",
      });
    }

    //check if user already exists
    const user = await userModel.findOne({ email });
    if (user) {
      return res.json({ success: false, message: "mail already exists" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = await userModel.create(userData);
    res.json({ success: true, message: `Account registered successfully` });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// --Api to login user--//
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ success: false, message: "Missing details" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_CODE);

    res.json({
      success: true,
      message: `Hi ${user.name}, Thanks for using our services`,
      token,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
