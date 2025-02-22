import { v4 as cloudinary } from "cloudinary";

const cloudinaryConnect = async () => {
  await cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret_key: process.env.API_SECRET_KEY,
  });
};

export default cloudinaryConnect;