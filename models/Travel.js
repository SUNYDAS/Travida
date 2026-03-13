import mongoose from "mongoose";

const travelSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  persons: String,
  destination: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model("Travel", travelSchema);
