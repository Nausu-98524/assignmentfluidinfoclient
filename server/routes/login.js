const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

const collection = require("../DB");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find User in Database
    const user = await collection.findOne({ email: email });
    if (user) {
      res.send("exist");
    } else {
      res.send("notexist");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
