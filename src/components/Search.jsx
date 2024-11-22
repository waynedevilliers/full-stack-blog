import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/posts");
                setPosts(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPosts();
    }, []);

const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    
}


    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search