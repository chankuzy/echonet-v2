import { Search, Bell, Mail, User } from 'lucide-react';
import Logo from '../Logo';

export const TopBar = () => {
  return (
    <header className="sticky top-0 z-10 dark:text-white/90 bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Logo size="sm" />
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-xl mx-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search Echonet..."
            className="block w-full pl-10 pr-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border-transparent focus:border-primary-light focus:ring-0"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <Mail className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};