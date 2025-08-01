import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import type { ReactNode } from 'react';

export default function RedirectIfAuth({ children }: { children: ReactNode }) {
  return isAuthenticated() ? <Navigate to="/" /> : children;
}