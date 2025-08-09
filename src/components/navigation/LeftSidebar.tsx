import { Home, Compass, Bell, User, Bookmark, Settings, MessageCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { icon: Home, label: 'Home', path: '/home' },
  { icon: Compass, label: 'Explore', path: '/explore' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: MessageCircle, label: 'Chat', path: '/chat' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: Bookmark, label: 'Bookmarks', path: '/bookmarks' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const LeftSidebar = () => {
  return (
    <aside className="w-64 border-r border-gray-200 dark:border-gray-800 dark:text-white/90 p-4 flex flex-col h-full">
      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-xl ${
                    isActive
                      ? 'bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`
                }
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
        Create Post
      </button>
    </aside>
  );
};