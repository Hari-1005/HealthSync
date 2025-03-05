import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: [true, 'Email already exists'], 
  },
  password: { type: String, required: true },
  image: { type: String, default:'https://res.cloudinary.com/dcizxvqvq/image/upload/v1740066890/upload_area_c3ehne.png'},
  address : {type:Object, default:{line1:'',line2:''}},
  gender : {type:String, default:"Not Selected"},
  dob : {type:String, default:"Not Selected"},
  phone : {type:String, default:"0x1x02x03"}
});

const userModel = mongoose.model.user || mongoose.model("User", userSchema);

export default userModel;