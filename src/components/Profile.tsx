import { motion } from 'framer-motion';
import { Camera, Edit3, MoreVertical, Heart, MessageSquare, Plus, MapPin, LinkIcon, Calendar } from 'lucide-react';
import Button from './ui/Button';
import { useState } from 'react';

export const FloatingActionButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 p-4 bg-primary-light dark:bg-primary-dark text-white rounded-full shadow-lg"
    >
      <Plus className="w-6 h-6" />
    </motion.button>
  );
};


export const ProfileHeader = () => {
  return (
    <div className="relative rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 h-64">
      {/* Cover Photo */}
      <motion.div 
        whileHover={{ opacity: 0.9 }}
        className="group relative h-full w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <button className="absolute bottom-4 right-4 p-2 bg-white/80 dark:bg-gray-900/80 rounded-full backdrop-blur-sm group-hover:opacity-100 opacity-0 transition-opacity">
          <Camera className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Profile Picture */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute -bottom-2 left-6 "
      >
        <div className="group relative">
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-900 object-cover"
          />
          <button className="absolute bottom-2 right-2 p-2 bg-primary-light dark:bg-primary-dark rounded-full backdrop-blur-sm group-hover:opacity-100 opacity-0 transition-opacity">
            <Edit3 className="w-4 h-4 text-white" />
          </button>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="absolute bottom-6 right-6 flex space-x-3">
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
  image: "https://images.unsplash.com/photo-1682686580391-615b3f4e56a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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

      <div className="flex items-center gap-4 mt-4 text-sm">
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
          <span className="font-semibold">1,234</span> <span className="text-gray-500">Following</span>
        </button>
        <button className="hover:underline">
          <span className="font-semibold">5.6K</span> <span className="text-gray-500">Followers</span>
        </button>
      </div>
    </motion.div>
  );
};

const tabs = ["Posts", "Media", "Likes", "Saved"];

export const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="mt-8 border-b border-gray-200 dark:border-gray-700">
      <div className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative py-3 px-1 font-medium text-sm ${
              activeTab === tab 
                ? 'text-primary-light dark:text-primary-dark' 
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-light dark:bg-primary-dark"
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};