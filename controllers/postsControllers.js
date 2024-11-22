import Post from "../db/models/posts.js";
// Fetch all posts
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ status: "error", message: "Error fetching posts: " + err.message });
    }
};

// Fetch a single post by ID
export const getPostById = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) return res.status(404).json({ status: "error", message: "Post not found" });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ status: "error", message: "Error fetching post: " + err.message });
    }
};

// Create a new post
export const createPost = async (req, res) => {
    const { title, description, content, author, date, cover } = req.body;
    if (!title || !description || !content || !author || !date) {
        return res.status(400).json({ status: "error", message: "All fields are required." });
    }

    try {
        const newPost = await Post.create({
            title,
            description,
            content,
            author,
            date,
            cover: cover || "https://via.placeholder.com/300",
        });
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ status: "error", message: "Error creating post: " + err.message });
    }
};

// Update an existing post
export const updatePost = async (req, res) => {
    const { title, description, content, author, date, cover } = req.body;

    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) return res.status(404).json({ status: "error", message: "Post not found" });

        await post.update({ title, description, content, author, date, cover });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ status: "error", message: "Error updating post: " + err.message });
    }
};

// Delete a post
export const deletePost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) return res.status(404).json({ status: "error", message: "Post not found" });

        await post.destroy();
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ status: "error", message: "Error deleting post: " + err.message });
    }
};
