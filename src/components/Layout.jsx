import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setAllPosts(response.data);
        setFilteredPosts(response.data); // Initially show all posts
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
    fetchPosts();
  }, []);

  // Update filteredPosts based on the search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredPosts(allPosts); // Show all posts when the query is empty
    } else {
      const results = allPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPosts(results);
    }
  };

  return (
    <div className="layout-container">
      <Navbar onSearch={handleSearch} />
      <main className="flex flex-col items-center justify-center">
        <Outlet context={{ filteredPosts }} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

