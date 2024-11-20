import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPost();
  }, [id]);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!post) {
    return <p className="text-gray-500">Loading...</p>;
  }

  return (
    <div className="post-details max-w-4xl mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-64 object-cover mb-4 rounded-lg"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-4">
        By {post.author} on {new Date(post.date).toLocaleDateString()}
      </p>
      <p className="text-gray-700">{post.description}</p>
    </div>
  );
};

export default PostDetails;

