const express = require("express");
const router = express.Router();
const collection = require("../DB");

// Admin Route to view user Details
router.get("/users", async (req, res) => {
  try {
    const users = await collection.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
