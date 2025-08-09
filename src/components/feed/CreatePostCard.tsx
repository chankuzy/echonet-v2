import { motion } from 'framer-motion';
import { Smile, Image, Video, Link2 } from 'lucide-react';

export const CreatePostCard = () => {
  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-4 mb-4 max-w-2xl self-center mx-auto"
    >
      <div className="flex items-center space-x-3 mb-4">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="What's happening?"
          className="flex-1 bg-transparent border-none focus:ring-0"
        />
      </div>

      <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-800 pt-3">
        <div className="flex space-x-4">
          <button className="text-primary-light dark:text-primary-dark p-1 rounded-full hover:bg-primary-light/10 dark:hover:bg-primary-dark/10">
            <Image className="h-5 w-5" />
          </button>
          <button className="text-primary-light dark:text-primary-dark p-1 rounded-full hover:bg-primary-light/10 dark:hover:bg-primary-dark/10">
            <Video className="h-5 w-5" />
          </button>
          <button className="text-primary-light dark:text-primary-dark p-1 rounded-full hover:bg-primary-light/10 dark:hover:bg-primary-dark/10">
            <Link2 className="h-5 w-5" />
          </button>
          <button className="text-primary-light dark:text-primary-dark p-1 rounded-full hover:bg-primary-light/10 dark:hover:bg-primary-dark/10">
            <Smile className="h-5 w-5" />
          </button>
        </div>

        <button className="bg-primary-light dark:bg-primary-dark text-white px-4 py-1.5 rounded-full text-sm font-medium">
          Post
        </button>
      </div>
    </motion.div>
  );
};