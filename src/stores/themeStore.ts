import { create } from 'zustand';

type ThemeState = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (darkMode: boolean) => void;
};

const useThemeStore = create<ThemeState>((set) => ({
  darkMode: true,
  toggleDarkMode: () => {
    const newMode = !useThemeStore.getState().darkMode;
    set({ darkMode: newMode });
    // Optional: Save to localStorage for persistence
    localStorage.setItem('darkMode', String(newMode));
  },
  setDarkMode: (darkMode) => {
    set({ darkMode });
    localStorage.setItem('darkMode', String(darkMode));
  },
}));

// Initialize from localStorage if available
const storedDarkMode = localStorage.getItem('darkMode');
if (storedDarkMode !== null) {
  useThemeStore.setState({ darkMode: storedDarkMode === 'true' });
}

export default useThemeStore;