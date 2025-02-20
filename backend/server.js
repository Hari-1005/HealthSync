import express from "express";
// import cors from 'cors';
import "dotenv/config";
import connectDB from "./config/mongodb.js";

// app config
const app = express();
connectDB();

//middlewares
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log(`server is running on ${port}`));