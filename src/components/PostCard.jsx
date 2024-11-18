import { useState, useEffect } from "react";
import axios from "axios";

const PostCard = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/posts");
                setPosts(response.data); // Set the data from the response
            } catch (err) {
                setError(err.message); // Handle errors
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostCard;
