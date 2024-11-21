import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PostDetails = ({ post, onDelete }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true); // Set the login state if the user is logged in
    }
  }, []);

  const handleUpdateClick = () => {
    navigate(`/posts/${post.id}/update`);
  };
  return (
    <div className="post-details max-w-4xl mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <img
        src={post.cover}
        alt={post.title}
        className="w-full h-64 object-cover mb-4 rounded-lg"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-4">
        By {post.author} on {new Date(post.date).toLocaleDateString()}
      </p>
      <p className="text-gray-700 mb-4">{post.content}</p>
      {isLoggedIn ? (
        <div className="flex justify-center space-x-2">
          <button
            className="bg-gray-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
            onClick={handleUpdateClick}
          >
            Update
          </button>
          <button
            className="bg-gray-500 hover:bg-red-700 text-white px-4 py-2 rounded"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="flex justify-center space-x-2">
          <button
            className="bg-gray-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
            disabled
          >
            Update
          </button>
          <button
            className="bg-gray-500 hover:bg-red-700 text-white px-4 py-2 rounded"
            disabled
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
