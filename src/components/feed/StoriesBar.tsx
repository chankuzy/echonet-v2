import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const stories = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  user: {
    name: ["Alex", "Jamie", "Taylor", "Morgan", "Casey", "Riley"][i % 6],
    avatar: `https://randomuser.me/api/portraits/${i % 2 ? 'men' : 'women'}/${i + 1}.jpg`,
    hasUnseen: Math.random() > 0.5,
  },
}));

export const StoriesBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const opacityLeft = useTransform(scrollXProgress, [0, 0.1], [0, 1]);
  const opacityRight = useTransform(scrollXProgress, [0.9, 1], [1, 0]);

  return (
    <div className="relative group max-w-2xl mx-auto">
      {/* Left fade indicator (only shows when scrollable) */}
      <motion.div 
        style={{ opacity: opacityLeft }}
        className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none flex items-center pl-2"
      >
        <ChevronLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </motion.div>

      {/* Stories container */}
      <div
        ref={ref}
        className="flex space-x-3 px-4 py-3 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {stories.map((story) => (
          <motion.div
            key={story.id}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col items-center space-y-1.5 flex-shrink-0 relative"
          >
            {/* Gradient border for unseen stories */}
            <div className={`p-0.5 rounded-full ${story.user.hasUnseen ? 'bg-gradient-to-tr from-purple-500 to-pink-500' : 'bg-gray-200 dark:bg-gray-700'}`}>
              <div className="p-0.5 bg-white dark:bg-gray-900 rounded-full">
                <img
                  src={story.user.avatar}
                  alt={story.user.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-transparent"
                />
              </div>
            </div>
            <span className="text-xs font-medium max-w-[4.5rem] truncate">
              {story.user.name}
            </span>
            
            {/* New story indicator */}
            {story.user.hasUnseen && (
              <div className="absolute top-0 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Right fade indicator (only shows when scrollable) */}
      <motion.div 
        style={{ opacity: opacityRight }}
        className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none flex items-center justify-end pr-2"
      >
        <ChevronRight className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </motion.div>
    </div>
  );
};