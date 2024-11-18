import express from "express";
import cors from "cors";



const app = express();
const port = 3000;

const posts = [
  { id: 1, title: "First Post" },
  { id: 2, title: "Second Post" },
];

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
