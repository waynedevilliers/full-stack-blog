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
    const [date, setDate] = useState("");
    const [cover, setCover] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/posts/${id}`);
                setPost(response.data);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setContent(response.data.content);
                setAuthor(response.data.author);
                setDate(response.data.date);
                setCover(response.data.cover);
            } catch (err) {
                setError("Failed to load the post.");
            }
        };

        fetchPost();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/posts/${id}`, {
                title,
                description,
                content,
                author,
                date,
                cover,
            });
            alert("Post updated successfully!");
            navigate(`/postDetails/${id}`); // Redirect to post details
        } catch (err) {
            setError("Failed to update the post.");
        }
    };

    if (error) return <p className="text-red-500">{error}</p>;
    if (!post) return <p>Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Update Post</h1>
            <form onSubmit={handleUpdate}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                        Content:
                    </label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                        Author:
                    </label>
                    <input
                        type="text"
                        id="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                        Cover:
                    </label>
                    <input
                        type="text"
                        id="Cover"
                        value={cover}
                        onChange={(e) => setCover(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdatePostPage;
