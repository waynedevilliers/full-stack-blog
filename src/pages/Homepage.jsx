import { useOutletContext } from "react-router-dom";
import PostCardContainer from "../components/PostCardContainer";

const Homepage = () => {
  const { filteredPosts } = useOutletContext();

  return (
    <div>
      <PostCardContainer posts={filteredPosts} />
    </div>
  );
};

export default Homepage;
