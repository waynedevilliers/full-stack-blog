import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PostDetails from "./PostDetails";

const PostDetailsContainer = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/posts/${id}`);
                setPost(response.data);
            } catch (err) {
                setError("Failed to load the post.");
            }
        };

        fetchPost();
    }, [id]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/posts/${id}`);
                alert("Post deleted successfully.");
                navigate("/");
            } catch (err) {
                setError("Failed to delete the post.");
            }
        }
    };

    if (error) return <p className="text-red-500">{error}</p>;
    if (!post) return <p>Loading...</p>;

    return <PostDetails post={post} onDelete={handleDelete}  />;
};

export default PostDetailsContainer;

