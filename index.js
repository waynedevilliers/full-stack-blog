import express from "express";
import cors from "cors";
import posts from "./src/data/blogPosts.js";
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id, 10));
  if (!post) return res.status(404).send("Post not found");
  res.send(post);
});

import crypto from "crypto"; // To generate unique IDs

app.post("/posts", (req, res) => {
  // Destructure data from the request body
  const { title, description, author, date, imageUrl } = req.body;

  // Validate required fields
  if (!title || !description || !author || !date) {
    return res.status(400).send("All fields (title, description, author, date) are required.");
  }

  // Create a new post object with a unique ID
  const newPost = {
    id: crypto.randomUUID(), // Generate a unique ID for the post
    title,
    description,
    author,
    date,
    imageUrl: imageUrl || "https://via.placeholder.com/300", // Default image if not provided
  };

  // Add the new post to the posts array
  posts.push(newPost);

  // Respond with the newly created post
  res.status(201).json(newPost);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
