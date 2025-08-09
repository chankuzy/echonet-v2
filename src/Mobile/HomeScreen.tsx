import { FeedPosts } from "../components/feed/FeedPosts";
import { StoriesBar } from "../components/feed/StoriesBar";

export const HomeScreen = () => {
  return (
    <div>
      <StoriesBar />
      <FeedPosts />
    </div>
  );
};