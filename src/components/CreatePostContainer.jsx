import { useState } from "react";
import axios from "axios";
import CreatePostForm from "./CreatePostForm";

const CreatePostContainer = () => {
  const [message, setMessage] = useState("");

  const handleCreatePost = async (postData) => {
    try {
      const response = await axios.post("http://localhost:3000/posts", postData); // Post data to the backend
      setMessage(`Post created successfully: ${response.data.title}`);
      alert(`Post created successfully: ${response.data.title}`);
    } catch (error) {
      console.error("Error creating post:", error.message);
      setMessage("Failed to create the post. Please try again.");
    }
  };

  return (
    <div className="create-post-container min-h-screen flex flex-col items-center pt-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Create a New Blog Post
      </h1>
      {message && (
        <p
          className={`mb-4 ${
            message.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
      <CreatePostForm onSubmit={handleCreatePost} />
    </div>
  );
};

export default CreatePostContainer;



