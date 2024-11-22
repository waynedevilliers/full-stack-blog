import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";

const Navbar = ({ onSearch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchValue, setSearchValue] = useState(""); // State to track the input value

  const handleLoginClick = () => setIsModalOpen(true);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    alert("You have logged out successfully!");
  };

  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchValue(query); // Update local state
    onSearch(query); // Pass query to parent
  };

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="w-full bg-gray-800 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold">
          <NavLink to="/">Lost Bearings...</NavLink>
        </div>

        <div className="flex items-center">
          {/* Add `value` attribute to display the typed input */}
          <input
            type="text"
            placeholder="Search posts by title..."
            value={searchValue} // Bind to local state
            onChange={handleSearchInput} // Update local state and call parent function
            className="border px-4 py-2 rounded text-black"
          />
        </div>

        <ul className="flex space-x-8 items-center">
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
              <button className="text-gray-500 cursor-not-allowed" disabled>
                Create Post
              </button>
            )}
          </li>
        </ul>
      </div>

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <LoginForm closeModal={() => setIsModalOpen(false)} setIsLoggedIn={setIsLoggedIn} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;






