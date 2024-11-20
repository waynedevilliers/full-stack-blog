import express from "express";
import bcrypt from "bcrypt";
import Users from "../models/users.js";

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).send("Email and password are required.");
    }
  
    try {
      const user = await Users.findOne({ where: { email } });
      if (!user) return res.status(404).send("User not found");
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).send("Invalid credentials");
  
      res.json({ message: "Login successful", user });
    } catch (err) {
      res.status(500).send("Error logging in: " + err.message);
    }
  });
  

export default router;
