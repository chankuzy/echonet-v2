import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ children }: { children: ReactNode }) {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (
    user &&
    !user.email_verified_at &&
    location.pathname !== '/login'
  ) {
    return <Navigate to="/login" />;
  }

  return children;
}
