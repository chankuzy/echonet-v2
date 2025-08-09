import { create } from 'zustand';

// If your PickerProps expects Theme, import it from the correct library:
// import type { Theme } from 'some-library';
type Theme = 'dark' | 'light'; // Adjust this if PickerProps uses more options

type ThemeState = {
  darkMode: boolean;
  theme: Theme;
  toggleDarkMode: () => void;
  setDarkMode: (darkMode: boolean) => void;
};

const useThemeStore = create<ThemeState>((set) => ({
  darkMode: true,
  theme: 'dark',
  toggleDarkMode: () => {
    const newMode = !useThemeStore.getState().darkMode;
    set({ darkMode: newMode, theme: newMode ? 'dark' : 'light' });
    localStorage.setItem('darkMode', String(newMode));
  },
  setDarkMode: (darkMode) => {
    set({ darkMode, theme: darkMode ? 'dark' : 'light' });
    localStorage.setItem('darkMode', String(darkMode));
  },
}));

// Initialize from localStorage if available
const storedDarkMode = localStorage.getItem('darkMode');
if (storedDarkMode !== null) {
  const isDark = storedDarkMode === 'true';
  useThemeStore.setState({ darkMode: isDark, theme: isDark ? 'dark' : 'light' });
}

export default useThemeStore;
