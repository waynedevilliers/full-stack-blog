import express from "express";
import Post from "../models/posts.js";

const router = express.Router();

// Fetch all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).send("Error fetching posts: " + err.message);
  }
});

// Fetch post by ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).send("Post not found");
    res.json(post);
  } catch (err) {
    res.status(500).send("Error fetching post: " + err.message);
  }
});

// Create a new post
router.post("/", async (req, res) => {
  const { title, description, content, author, date, imageUrl } = req.body;

  if (!title || !description || !content || !author || !date) {
    return res.status(400).send("All fields are required.");
  }

  try {
    const newPost = await Post.create({
      title,
      description,
      content,
      author,
      date,
      imageUrl: imageUrl || "https://via.placeholder.com/300",
    });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).send("Error creating post: " + err.message);
  }
});

// Update a post
router.put("/:id", async (req, res) => {
  const { title, description, content, author, date, imageUrl } = req.body;

  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).send("Post not found");

    await post.update({ title, description, content, author, date, imageUrl });
    res.json(post);
  } catch (err) {
    res.status(500).send("Error updating post: " + err.message);
  }
});

// Delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).send("Post not found");

    await post.destroy();
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send("Error deleting post: " + err.message);
  }
});

export default router;
