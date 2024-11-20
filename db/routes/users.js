import express from "express";
import Users from "../models/users.js";
import bcrypt from "bcrypt";

const router = express.Router();

// Fetch all users
router.get("/", async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).send("Error fetching users: " + err.message);
  }
});

// Fetch user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (err) {
    res.status(500).send("Error finding user: " + err.message);
  }
});

// Create a new user
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("All fields are required.");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Users.create({ name, email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).send("Error creating user: " + err.message);
  }
});

// Update a user
router.put("/:id", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await Users.findByPk(req.params.id);
    if (!user) return res.status(404).send("User not found");

    await user.update({ name, email, password });
    res.json(user);
  } catch (err) {
    res.status(500).send("Error updating user: " + err.message);
  }
});

// Delete a user
router.delete("/:id", async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (!user) return res.status(404).send("User not found");

    await user.destroy();
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).send("Error deleting user: " + err.message);
  }
});

export default router;
