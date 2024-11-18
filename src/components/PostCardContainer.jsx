import PostCard from "./PostCard";
const PostCardContainer = () => {
  return (
    <div className="post-card-container flex grid grid-cols-1 gap-4">
      <PostCard />
    </div>
  );
};

export default PostCardContainer;
