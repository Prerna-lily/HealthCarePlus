const express = require("express");
const router = express.Router();
const pool = require("../db"); // PostgreSQL connection

router.post("/loginUser", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM Patients WHERE email = $1", [email]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found." });
    }

    if (result.rows[0].password !== password) {
      return res.status(401).json({ message: "Incorrect password." });
    }

    res.json({ message: "Login successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during login." });
  }
});

module.exports = router;
