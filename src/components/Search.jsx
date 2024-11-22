import { useState, useEffect } from "react";
import axios from "axios";

const SearchPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [query, setQuery] = useState("");

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

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    // Filter posts based on the query
    const results = allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    );
    setFilteredPosts(results);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search posts by title..."
        className="border px-4 py-2 rounded text-black"
      />
      <div className="post-list mt-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="post-item border-b py-4">
            <h2 className="font-bold text-lg">{post.title}</h2>
            <p className="text-gray-600">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPosts;
