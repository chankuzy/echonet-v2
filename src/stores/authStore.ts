// src/stores/authStore.ts
import { create } from 'zustand';
import type { User } from '../types/auth';

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  googleLogin: (accessToken: string) => Promise<void>;
  githubLogin: (code: string) => Promise<void>;
  fetchUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  isLoading: false,
  error: null,
  
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const { login } = await import('../api/auth');
      const { user, token } = await login({ email, password });
      localStorage.setItem('token', token);
      set({ user, token, isLoading: false });
    } catch (error: any) {
      set({ error: error?.response?.data?.message || 'Login failed', isLoading: false });
    }
  },

  register: async (name, email, password) => {
    set({ isLoading: true, error: null });
    try {
      const { register } = await import('../api/auth');
      const { user, token } = await register({ name, email, password, password_confirmation: password });
      localStorage.setItem('token', token);
      set({ user, token, isLoading: false });
    } catch (error: any) {
      set({ error: error?.response?.data?.message || 'Registration failed', isLoading: false });
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null });
  },

  googleLogin: async (accessToken) => {
    set({ isLoading: true, error: null });
    try {
      const { loginWithGoogle } = await import('../api/auth');
      const { user, token } = await loginWithGoogle(accessToken);
      localStorage.setItem('token', token);
      set({ user, token, isLoading: false });
    } catch (error: any) {
      set({ error: error?.response?.data?.message || 'Google login failed', isLoading: false });
    }
  },

  githubLogin: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const { loginWithGithub } = await import('../api/auth');
      const { user, token } = await loginWithGithub(code);
      localStorage.setItem('token', token);
      set({ user, token, isLoading: false });
    } catch (error: any) {
      set({ error: error?.response?.data?.message || 'GitHub login failed', isLoading: false });
    }
  },

  fetchUser: async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    set({ isLoading: true });
    try {
      const { getCurrentUser } = await import('../api/auth');
      const user = await getCurrentUser(token);
      set({ user, token, isLoading: false });
    } catch (error: any) {
      localStorage.removeItem('token');
      set({ user: null, token: null, isLoading: false });
    }
  }
}));