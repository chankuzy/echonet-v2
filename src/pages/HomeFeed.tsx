import { CreatePostCard } from '../components/feed/CreatePostCard';
import { FeedPosts } from '../components/feed/FeedPosts';
import { StoriesBar } from '../components/feed/StoriesBar';

export const HomeFeed = () => {
  return (
    <div className="max-w-4xl mx-auto w-full">

        {/* Create Post */}
        <CreatePostCard />

      {/* Stories (Mobile-first) */}
      <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm mb-4 overflow-hidden">
        <StoriesBar />
      </div>

      {/* Feed Posts */}
      <FeedPosts />
    </div>
  );
};