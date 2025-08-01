import { Moon, Sun, Bell, Mail } from "lucide-react";
import { useState } from "react";

export default function HeaderBar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <div className="flex justify-between items-center py-4 px-6 bg-[#0e0b1c]">
      <div className="flex items-center space-x-6">
        <div className="text-white text-2xl font-bold">UberX</div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search your today analysis"
            className="bg-[#1f1b33] text-sm text-white px-5 py-2 pl-10 rounded-full w-80 placeholder:text-gray-400"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
          </svg>
        </div>
      </div>

      <div className="flex items-center space-x-5">
        <button
          className="rounded-full px-3 py-1 bg-[#2d264f] text-sm text-white"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <Bell className="text-white h-5 w-5" />
        <Mail className="text-white h-5 w-5" />
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/avatar.jpg"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-white text-sm">Lincoln Saris</div>
        </div>
      </div>
    </div>
  );
}
