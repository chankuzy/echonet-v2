// src/api/auth.ts
import axios from 'axios';
import type { LoginCredentials, RegisterCredentials, AuthResponse } from '../types/auth';

const API_URL = 'https://your-laravel-api.com/api';

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const register = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/register`, credentials);
  return response.data;
};

export const loginWithGoogle = async (accessToken: string): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/auth/google`, { access_token: accessToken });
  return response.data;
};

export const loginWithGithub = async (code: string): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/auth/github`, { code });
  return response.data;
};

export const getCurrentUser = async (token: string): Promise<User> => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};