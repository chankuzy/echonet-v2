import { Home, Search, Bell, Mail, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex justify-around py-3 z-50">
      <NavLink 
        to="/home" 
        className={({ isActive }) => 
          `p-2 ${isActive ? 'text-primary-500' : 'text-gray-500'}`
        }
      >
        <Home size={24} />
      </NavLink>
      <NavLink 
        to="/explore" 
        className={({ isActive }) => 
          `p-2 ${isActive ? 'text-primary-500' : 'text-gray-500'}`
        }
      >
        <Search size={24} />
      </NavLink>
      <NavLink 
        to="/notifications" 
        className={({ isActive }) => 
          `p-2 ${isActive ? 'text-primary-500' : 'text-gray-500'}`
        }
      >
        <Bell size={24} />
      </NavLink>
      <NavLink 
        to="/messages" 
        className={({ isActive }) => 
          `p-2 ${isActive ? 'text-primary-500' : 'text-gray-500'}`
        }
      >
        <Mail size={24} />
      </NavLink>
      <NavLink 
        to="/profile" 
        className={({ isActive }) => 
          `p-2 ${isActive ? 'text-primary-500' : 'text-gray-500'}`
        }
      >
        <User size={24} />
      </NavLink>
    </nav>
  );
};