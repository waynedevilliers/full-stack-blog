import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";
import SearchPosts from "./Search";

const Navbar = () => {
  // Tracks if the modal (login/signup form) is open
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Tracks if the user is logged in (initially check localStorage)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Opens the login modal
  const handleLoginClick = () => setIsModalOpen(true);

  // Logs out the user
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove the logged-in state from localStorage
    setIsLoggedIn(false); // Update the state
    alert("You have logged out successfully!");
  };

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true); // Set the login state if the user is logged in
    }
  }, []);

  return (
    <div className="w-full bg-gray-800 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-3xl font-bold">
          <NavLink to="/">Lost Bearings...</NavLink>
        </div>

        <div className="flex items-center">
          <SearchPosts />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 items-center">
          {/* Conditional Login/Logout Button */}
          <li>
            {isLoggedIn ? (
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-1 px-4 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-1 px-4 rounded"
                onClick={handleLoginClick}
              >
                Login
              </button>
            )}
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* Conditional Rendering of Create Post Button */}
            {isLoggedIn ? (
              <NavLink
                to="/createPost"
                className={({ isActive }) =>
                  isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
                }
              >
                <button className="hover:text-blue-300">Create Post</button>
              </NavLink>
            ) : (
              <button
                className="text-gray-500 cursor-not-allowed"
                disabled
              >
                Create Post
              </button>
            )}
          </li>
        </ul>
      </div>

      {/* Login Modal */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsModalOpen(false)} // Close modal on background click
        >
          <div
            className="bg-white rounded-lg p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <LoginForm
              closeModal={() => setIsModalOpen(false)}
              setIsLoggedIn={setIsLoggedIn} // Pass down login state handler
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;




