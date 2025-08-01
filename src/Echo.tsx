// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/LandingPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { useEffect } from 'react';
import useThemeStore from './stores/themeStore';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { ResetPassword } from './pages/auth/ResetPassword';
import { VerifyEmail } from './pages/auth/VerifyEmail';
import { ProfilePage } from './pages/ProfilePage';

function Echo() {
  const { darkMode } = useThemeStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default Echo;