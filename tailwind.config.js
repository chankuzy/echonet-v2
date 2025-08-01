/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366f1', // indigo-500
          dark: '#818cf8', // indigo-400
        },
        secondary: {
          light: '#10b981', // emerald-500
          dark: '#34d399', // emerald-400
        },
        background: {
          light: '#ffffff',
          dark: '#0f172a', // slate-900
        },
        card: {
          light: '#f8fafc', // slate-50
          dark: '#1e293b', // slate-800
        },
        text: {
          light: '#334155', // slate-700
          dark: '#e2e8f0', // slate-200
        },
      },
    },
  },
  plugins: [],
};


