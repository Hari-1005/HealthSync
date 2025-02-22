import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'
import doctorModel from "../models/doctorModel.js";

//--Add Doctor---//
export const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      available,
      fees,
      address,
    } = req.body;

    const imageFile = req.file;

    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !available ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "Missing details" });
    }

    if (!imageFile) {
        return res.json({ success: false, message: "No image uploaded" });
    }

    //validating email format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    //validating strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    //hashing a password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    // Delete the uploaded file from local storage
fs.unlink(imageFile.path, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
    } else {
      console.log("Temp file deleted:", imageFile.path);
    }
})

    const doctorData = {
      name,
      email,
      password: hashedPassword,
      image: imageUrl,
      speciality,
      degree,
      experience,
      about,
      available,
      fees,
      address: JSON.parse(address),
      date : Date.now()
    };

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    res.json({ success: true, message: "Doctor added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
