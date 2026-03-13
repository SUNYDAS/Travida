import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  text: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model("enquiry", enquirySchema);
