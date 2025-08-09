import { motion } from 'framer-motion';
import { RightSidebar } from './navigation/RightSidebar';
import { LeftSidebar } from './navigation/LeftSidebar';
import { TopBar } from './navigation/TopBar';
import { FeedPosts } from './feed/FeedPosts';

export const FeedLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Top Bar (Sticky) */}
      <TopBar />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar (Collapsible) */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className="hidden md:block w-64 border-r border-gray-200 dark:border-gray-800 overflow-y-auto"
        >
          <LeftSidebar />
        </motion.div>

        {/* Central Feed */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 overflow-y-auto p-4"
        >
          <FeedPosts />
        </motion.main>

        {/* Right Sidebar (Trends/Suggestions) */}
        <motion.aside
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          className="hidden lg:block w-80 border-l border-gray-200 dark:border-gray-800 overflow-y-auto"
        >
          <RightSidebar />
        </motion.aside>
      </div>
    </div>
  );
};