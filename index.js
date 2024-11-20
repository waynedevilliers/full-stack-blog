import express from "express";
import cors from "cors";
import sequelize from "./db/index.js"; // Import Sequelize connection
import Post from "./models/posts.js"; // Import the Post model
import crypto from "crypto"; // Optional: if still used elsewhere

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sync the database
sequelize
  .sync({ alter: true }) // Update tables to match models
  .then(() => console.log("Database synchronized."))
  .catch((err) => console.error("Database synchronization failed:", err));

// Routes

// Base route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Fetch all posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.findAll(); // Fetch all posts from the database
    res.json(posts);
  } catch (err) {
    res.status(500).send("Error fetching posts: " + err.message);
  }
});

// Fetch a single post by ID
app.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id); // Find post by primary key
    if (!post) return res.status(404).send("Post not found");
    res.json(post);
  } catch (err) {
    res.status(500).send("Error fetching post: " + err.message);
  }
});

// Create a new post
app.post("/posts", async (req, res) => {
  const { title, description, author, date, imageUrl } = req.body;

  // Validate required fields
  if (!title || !description || !author || !date) {
    return res.status(400).send("All fields (title, description, author, date) are required.");
  }

  try {
    const newPost = await Post.create({
      title,
      description,
      author,
      date,
      imageUrl: imageUrl || "https://via.placeholder.com/300", // Default image if not provided
    });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).send("Error creating post: " + err.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
