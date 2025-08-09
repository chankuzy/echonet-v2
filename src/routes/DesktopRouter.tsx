import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { HomeFeed } from "../pages/HomeFeed";
import { NotificationsPage } from "../pages/NotificationsPage";
import { UnifiedChatPage } from "../pages/UnifiedChatPage";
import { ProfilePage } from "../pages/ProfilePage";
import Landing from "../pages/LandingPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { ForgotPassword } from "../pages/auth/ForgotPassword";
import { ResetPassword } from "../pages/auth/ResetPassword";
import { VerifyEmail } from "../pages/auth/VerifyEmail";
import useThemeStore from "../stores/themeStore";
import { useEffect } from "react";
import { SettingsScreen } from "../Mobile/SettingsScreen";

function DesktopRouter() {
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
        <Route element={<MainLayout/>}>
          <Route path="/home" element={<HomeFeed />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/chat" element={<UnifiedChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsScreen />} />
        </Route>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </Router>
  );
}

export default DesktopRouter;