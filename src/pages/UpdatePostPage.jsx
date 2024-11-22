import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdatePostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch post details
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        const { title, description, content, author, cover } = response.data;

        setPost(response.data);
        setTitle(title);
        setDescription(description);
        setContent(content);
        setAuthor(author);
        setCover(cover);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load the post. Please try again.");
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // Handle form submission
  const handleUpdate = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await axios.put(`http://localhost:3000/posts/${id}`, {
        title,
        description,
        content,
        author,
        cover,
      });
      alert("Post updated successfully!");
      navigate(`/postDetails/${id}`);
    } catch (err) {
      setError("Failed to update the post. Please check your inputs.");
    }
  };

  const handleClick = () => {
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="w-1/2 mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Update Post</h1>
      <form onSubmit={handleUpdate}>
        {/* Title Field */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Content Field */}
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-medium mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            rows="8"
            required
          ></textarea>
        </div>

        {/* Author Field */}
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 font-medium mb-2"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Cover URL Field */}
        <div className="mb-4">
          <label
            htmlFor="cover"
            className="block text-gray-700 font-medium mb-2"
          >
            Cover Image URL
          </label>
          <input
            type="url"
            id="cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center space-x-2  ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded"
            onClick={handleClick}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePostPage;
