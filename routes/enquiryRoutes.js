import express from "express";
import Enquiry from "../models/enquiry_schema.js";

const router = express.Router();

// Save form
router.post("/enquiry", async (req, res) => {
  try {
    const data = await Enquiry.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all data
router.get("/enquiry", async (req, res) => {
  const data = await Enquiry.find().sort({ createdAt: -1 });
  res.json(data);
});

// Delete record
router.delete("/enquiry/:id", async (req, res) => {
  await Enquiry.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
