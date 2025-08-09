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
          light: '#6366f1',
          dark: '#818cf8',
        },
        secondary: {
          light: '#10b981',
          dark: '#34d399',
        },
        background: {
          light: '#ffffff',
          dark: '#0f172a',
        },
        card: {
          light: '#f8fafc',
          dark: '#1e293b',
        },
        text: {
          light: '#334155',
          dark: '#e2e8f0',
        },
      },
    },
  },
  plugins: [],
};


