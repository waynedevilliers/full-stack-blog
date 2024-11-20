import express from "express";
import cors from "cors";
import sequelize from "./db/index.js";

import userRoutes from "./db/routes/users.js";
import postRoutes from "./db/routes/posts.js";
import authRoutes from "./db/routes/auth.js";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/auth", authRoutes);

// Sync database
sequelize
  .sync({ alter: true })
  .then(() => console.log("Database synchronized."))
  .catch((err) => console.error("Database synchronization failed:", err));

// Base route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

