import { motion } from 'framer-motion';
import { Camera, Edit3, MoreVertical, Heart, Bookmark, MessageSquare, Plus, MapPin, LinkIcon, Calendar, Play } from 'lucide-react';
import Button from './ui/Button';
import { useState } from 'react';

export const FloatingActionButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-40 right-6 md:right-40 sm:right-20 p-4 bg-primary-light dark:bg-primary-dark text-white rounded-full shadow-lg z-50"
    >
      <Plus className="w-6 h-6" />
    </motion.button>
  );
};

export const ProfileHeader = () => {
  return (
    <div className="relative bg-gray-200 dark:bg-gray-800 rounded-b-xl overflow-visible pb-20">
      {/* Cover Photo */}
      <motion.div
        whileHover={{ opacity: 0.95 }}
        className="relative h-64 w-full group overflow-hidden rounded-b-xl"
      >
        <img
          src="/src/assets/avatar.jpg"
          alt="Cover"
          className="w-full h-full object-cover"
        />
        {/* Cover Edit Button */}
        <button className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-gray-900/80 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <Camera className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Profile Picture */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute left-6 -bottom-16 z-10"
      >
        <div className="group relative w-32 h-32">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-900 object-cover"
          />
          {/* Profile Edit Button */}
          <button className="absolute bottom-2 right-2 p-2 bg-primary-light dark:bg-primary-dark rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <Edit3 className="w-4 h-4 text-white" />
          </button>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="absolute right-6 -bottom-16 flex gap-3 z-10">
        <Button variant="outline" className="flex items-center gap-2">
          <MoreVertical className="w-4 h-4" />
        </Button>
        <Button className="bg-primary-light dark:bg-primary-dark hover:bg-opacity-90">
          Follow
        </Button>
      </div>
    </div>
  );
};


const posts = Array(6).fill({
  image: "/src/assets/avatar.jpg",
  likes: 124,
  comments: 12,
});

export const ProfilePosts = () => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-1">
      {posts.map((post, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 0.98 }}
          className="group relative aspect-square overflow-hidden rounded-lg"
        >
          <img
            src={post.image}
            alt="Post"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <span className="text-white flex items-center gap-1">
              <Heart className="w-4 h-4" /> {post.likes}
            </span>
            <span className="text-white flex items-center gap-1">
              <MessageSquare className="w-4 h-4" /> {post.comments}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const UserInfo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-20 px-6"
    >
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">Jane Doe</h1>
          <p className="text-gray-500 dark:text-gray-400">@janedoe</p>
        </div>
      </div>

      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Digital artist & UI/UX designer. Creating beautiful interfaces with React & Tailwind.
      </p>

      <div className="dark:text-text-dark text-text-light flex items-center gap-4 mt-4 text-sm">
        <span className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>San Francisco, CA</span>
        </span>
        <span className="flex items-center gap-1">
          <LinkIcon className="w-4 h-4" />
          <a href="#" className="text-primary-light dark:text-primary-dark hover:underline">jane.design</a>
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>Joined June 2023</span>
        </span>
      </div>

      <div className="flex gap-5 mt-4">
        <button className="hover:underline">
          <span className="font-semibold dark:text-text-dark">1,234</span> <span className="text-gray-500">Following</span>
        </button>
        <button className="hover:underline">
          <span className="font-semibold dark:text-text-dark">5.6K</span> <span className="text-gray-500">Followers</span>
        </button>
      </div>
    </motion.div>
  );
};

export const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="mt-6">
      <div className="flex overflow-x-auto no-scrollbar">
        {['Posts', 'Media', 'Likes', 'Saved'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
              activeTab === tab.toLowerCase()
                ? 'text-primary-light dark:text-primary-dark border-b-2 border-primary-light dark:border-primary-dark'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === 'media' && <MediaTab />}
        {activeTab === 'likes' && <LikesTab />}
        {activeTab === 'saved' && <SavedTab />}
        {activeTab === 'posts' && <ProfilePosts />}
      </div>
    </div>
  );
};

const media = Array(12).fill({
  image: "https://images.unsplash.com/photo-1682686580391-615b3f4e56a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  type: 'image', // or 'video'
});

export const MediaTab = () => {
  return (
    <div className="grid grid-cols-3 gap-1 mt-4">
      {media.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 0.98 }}
          className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"
        >
          <img
            src="/src/assets/avatar.jpg"
            // src={item.image}
            alt="Media"
            className="w-full h-full object-cover"
          />
          {item.type === 'video' && (
            <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
              <Play className="w-3 h-3 text-white" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

const likedPosts = Array(6).fill({
  image: "/src/assets/avatar.jpg",
  user: {
    name: "Alex Morgan",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    username: "alexmorgan",
  },
});

export const LikesTab = () => {
  return (
    <div className="mt-4 space-y-4 text-white/90">
      {likedPosts.map((post, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="font-medium">{post.user.name}</p>
            <p className="text-sm text-gray-500">@{post.user.username}</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Heart className="w-4 h-4 fill-current text-red-500" />
            <span>Liked your post</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const savedItems = Array(9).fill({
  image: "/src/assets/avatar.jpg",
  title: "UI Design Inspiration",
});

export const SavedTab = () => {
  return (
    <div className="columns-2 gap-2 mt-4">
      {savedItems.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 0.98 }}
          className="mb-2 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 break-inside-avoid"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white text-sm font-medium">{item.title}</p>
            <div className="flex justify-end">
              <Bookmark className="w-4 h-4 text-white fill-current" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};