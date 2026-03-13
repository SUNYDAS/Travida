import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import travelRoutes from "./routes/travelRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api", travelRoutes);
app.use("/api", enquiryRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));