import express from "express";
import Travel from "../models/Travel.js";

const router = express.Router();

// Save form
router.post("/travel", async (req, res) => {
  try {
    const data = await Travel.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all data
router.get("/travel", async (req, res) => {
  const data = await Travel.find().sort({ createdAt: -1 });
  res.json(data);
});

// Delete record
router.delete("/travel/:id", async (req, res) => {
  await Travel.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
