import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import travelRoutes from "./routes/travelRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://sunydas462_db_user:travida_pass@cluster0.n8poyus.mongodb.net/travelDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api", travelRoutes);
app.use("/api", enquiryRoutes);

console.log("Routes Loaded");

app.listen(5000, () => console.log("Server running on port 5000"));