import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import adminRouter from "./routes/adminRoute.js";
import cloudinaryConnect from "./config/cloudinary.js";
import doctorRouter from "./routes/doctorRoute.js";

// app config
const app = express();
const port = process.env.PORT || 5000;
connectDB();
cloudinaryConnect();

//middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

app.get("/", (req, res) => {
  res.json({ msg: "API WORKING" });
});

app.listen(port, () => console.log(`server is running on ${port}`));
