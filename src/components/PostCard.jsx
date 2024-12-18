import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <Link to={`/postDetails/${post.id}`}>
      <div className="post-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4">{post.description}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>By {post.author}</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;




