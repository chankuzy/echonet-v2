import { useMediaQuery } from 'react-responsive';
import { LeftSidebar } from '../components/navigation/LeftSidebar';
import { RightSidebar } from '../components/navigation/RightSidebar';
import { TopBar } from '../components/navigation/TopBar';
import { BottomNav } from '../components/navigation/BottomNav';
import { Outlet, useLocation } from 'react-router-dom';
import { FloatingActionButton } from '../components/Profile';
import { motion } from 'framer-motion'

export const MainLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const location = useLocation();

  return (
    <>
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Always show top bar */}
      {!isMobile && <TopBar />}

      <div className="flex flex-1 overflow-hidden">
        {/* Show left sidebar only on desktop */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className="hidden md:block w-64 border-r border-gray-200 dark:border-gray-800 overflow-y-auto"
        >
          {!isMobile && <LeftSidebar />}
        </motion.div>

        {/* Main content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 overflow-y-auto p-4"
        >
          <Outlet />
        </motion.main>

        <FloatingActionButton />
        

        {/* Show right sidebar only on desktop */}
        <motion.aside
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          className="hidden lg:block w-80 border-l border-gray-200 dark:border-gray-800 overflow-y-auto"
        >
          {!isMobile && location.pathname !== "/profile" && <RightSidebar />}
        </motion.aside>
      </div>

      {/* Show mobile navbar only on mobile */}
      {isMobile && <BottomNav />}
    </div>
    </>
  );
};