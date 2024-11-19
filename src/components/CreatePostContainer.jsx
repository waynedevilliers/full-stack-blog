import CreatePostForm from "./CreatePostForm";
import axios from "axios";
import { useState } from "react";

const CreatePostContainer = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    date: "",
    imageUrl: "",
  });

  // Handler for input changes in the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Destructure the name and value from the input
    setFormData({
      ...formData, // Spread the existing state
      [name]: value, // Update the specific field based on the input's name
    });
  };

  // Handler for form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page refresh)
    try {
      // Send a POST request to the backend with the form data
      const response = await axios.post("http://localhost:3000/posts", formData);

      // Log the response to confirm successful post creation
      console.log("Post created successfully:", response.data);
      alert("Post created successfully!");

      // Reset the form after successful submission
      setFormData({ title: "", description: "", author: "", date: "", imageUrl: "" });
    } catch (err) {
      console.error("Error creating post:", err); // Log errors if any
    }
  };

  return (
    <div className="create-post-container bg-gray-50 min-h-screen flex flex-col items-center pt-12 px-4">
      {/* Page title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Create a New Blog Post
      </h1>

      {/* Render the CreatePostForm, passing the handlers and state as props */}
      <CreatePostForm
        formData={formData} // Current form data
        onInputChange={handleInputChange} // Handler for form field changes
        onFormSubmit={handleFormSubmit} // Handler for form submission
      />
    </div>
  );
};

export default CreatePostContainer;


