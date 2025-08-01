import {
  LayoutDashboard,
  Target,
  Clock,
  Activity,
  User,
  LogOut
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Nav = {
  icon: ReactNode,
  label: string,
  url: string
};

export const Sidebar = () => {
  const navItems: Nav[] = [
    { 
      icon: <LayoutDashboard size={18} />, 
      label: "Dashboard", 
      url: '/' 
    },
    { 
      icon: <Target size={18} />, 
      label: "Goals", 
      url: '/goals' 
    },
    { 
      icon: <Clock size={18} />, 
      label: "Time Blocks", 
      url: '/time-blocks' 
    },
    { 
      icon: <Activity size={18} />, 
      label: "Kill Mode", 
      url: '/kill-mode' 
    },
    { 
      icon: <User size={18} />, 
      label: "Profile", 
      url: '/profile' 
    },
  ];

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-0 z-50 w-64 h-screen bg-[#0d0f1a] border-r border-gray-800 flex flex-col p-4"
    >
      <div className="text-white text-xl font-bold mb-8">WR Control</div>
      <nav className="flex flex-col gap-4">
        {navItems.map((item, i) => (
          <motion.button
            key={i}
            whileHover={{ x: 2, scale: 1.02 }}
            >
            <Link to={item.url} className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                {item.icon}
                {item.label}
            </Link>
          </motion.button>
        ))}
      </nav>
      <div className="mt-auto">
        <button className="flex items-center gap-3 text-red-500 hover:text-red-400 transition">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </motion.aside>
  );
};