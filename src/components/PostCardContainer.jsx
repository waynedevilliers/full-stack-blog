import PostCard from "./PostCard.jsx";

const PostCardContainer = ({ posts }) => {
    return (
      <div className="post-card-container max-w-6xl mx-auto p-5 ">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Blog Posts</h1>
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default PostCardContainer;
  


