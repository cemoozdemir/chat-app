import express from "express";
import Group from "../models/group";

const router = express.Router();

router.post("/create", async (req, res) => {
  const { name } = req.body;
  try {
    const group = await Group.create({ name });
    res.status(201).json(group);
  } catch (error) {
    res.status(500).json({ error: "Error creating group" });
  }
});

export default router;
