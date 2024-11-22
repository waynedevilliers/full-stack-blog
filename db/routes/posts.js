import express from "express";
import { getAllPosts, getPostById, createPost, updatePost, deletePost } from "../../controllers/postsControllers.js";

const router = express.Router();

// Fetch all posts
router.get("/", getAllPosts);

// Fetch a specific post by ID
router.get("/:id", getPostById);

// Create a new post
router.post("/", createPost);

// Update a post by ID
router.put("/:id", updatePost);

// Delete a post by ID
router.delete("/:id", deletePost);

export default router;
