// LoginForm.js
import { useState } from "react";
import axios from "axios";
import FormField from "./FormField";
import ErrorMessage from "./ErrorMessage";
import FormSwitch from "./FormSwitch";

const LoginForm = ({ closeModal, setIsLoggedIn }) => {
  const [formMode, setFormMode] = useState("login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
  
    try {
      if (formMode === "signup") {
        // Signup logic
        const response = await axios.post("http://localhost:3000/users", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
  
        alert("Signup successful! You can now log in.");
        setFormMode("login"); // Switch to login mode
  
        setFormData({ name: "", email: "", password: "" });
      } else {
        // Login logic
        const response = await axios.post("http://localhost:3000/auth/login", {
          email: formData.email,
          password: formData.password,
        });
  
        // Set logged-in status in localStorage
        localStorage.setItem("isLoggedIn", "true");
  
        // Set app's login state
        setIsLoggedIn(true);
        alert(`Hi, ${response.data.user.name}!`);
        closeModal(); // Close modal on successful login
      }
    } catch (err) {
      setError(err.response?.data || "An error occurred. Please try again.");
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formMode === "signup" && (
        <FormField
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      )}
      <FormField
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormField
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <ErrorMessage message={error} />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-gray-700 text-white font-semibold rounded hover:bg-gray-600"
      >
        {formMode === "login" ? "Login" : "Sign Up"}
      </button>
      <FormSwitch formMode={formMode} setFormMode={setFormMode} />
    </form>
  );
};

export default LoginForm;

