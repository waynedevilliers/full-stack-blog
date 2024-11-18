import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";

const PostCardContainer = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/posts");
                setPosts(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="post-card-container max-w-6xl mx-auto p-6 min-h-screen">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Blog Posts</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default PostCardContainer;


