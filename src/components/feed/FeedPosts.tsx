import { motion } from 'framer-motion';
import { Heart, MessageSquare, Repeat, Share, MoreHorizontal } from 'lucide-react';

const posts = Array(5).fill({
  user: {
    name: "Alex Morgan",
    handle: "@alexmorgan",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  content: "Just launched our new product! Check it out at echonet.design #design #tech",
  image: "https://images.unsplash.com/photo-1682686580391-615b3f4e56a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  stats: {
    likes: 124,
    comments: 28,
    shares: 12,
  },
});

export const FeedPosts = () => {
  return (
    <div className="space-y-6 max-w-2xl mx-auto text-white/90">
      {posts.map((post, i) => (
        <motion.article
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.05 }}
          className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Post Header */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={post.user.avatar}
                alt={post.user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{post.user.name}</h3>
                <p className="text-sm text-gray-500">{post.user.handle}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>

          {/* Post Content */}
          <div className="px-4 pb-3">
            <p className="mb-3">{post.content}</p>
            {post.image && (
              <div className="rounded-lg overflow-hidden mb-3">
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>

          {/* Post Actions */}
          <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-800 flex justify-between">
            <button className="flex items-center space-x-1 group">
              <Heart className="h-5 w-5 text-gray-400 group-hover:text-red-500" />
              <span className="text-sm">{post.stats.likes}</span>
            </button>
            <button className="flex items-center space-x-1 group">
              <MessageSquare className="h-5 w-5 text-gray-400 group-hover:text-blue-500" />
              <span className="text-sm">{post.stats.comments}</span>
            </button>
            <button className="flex items-center space-x-1 group">
              <Repeat className="h-5 w-5 text-gray-400 group-hover:text-green-500" />
              <span className="text-sm">{post.stats.shares}</span>
            </button>
            <button className="flex items-center space-x-1 group">
              <Share className="h-5 w-5 text-gray-400 group-hover:text-purple-500" />
            </button>
          </div>
        </motion.article>
      ))}
    </div>
  );
};