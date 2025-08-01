import { Moon, Sun } from 'lucide-react';
import useThemeStore from '../stores/themeStore';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-300" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle;