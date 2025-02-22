import express from "express";
// import cors from 'cors';
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import adminRouter from "./routes/adminRoute.js";

// app config
const app = express();
const port = process.env.PORT || 5000;
connectDB();

//middlewares
app.use(express.json());
// app.use(cors())
app.use('/api/admin', adminRouter)

//api endpoints
app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log(`server is running on ${port}`));