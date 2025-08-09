import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../Mobile/HomeScreen';
import { SettingsScreen } from '../Mobile/SettingsScreen';
import { MobileLayout } from '../layout/MobileLayout';
import { ConversationPage } from '../Mobile/ConversationPage';
import { MessagesPage } from '../Mobile/MessagesPage';
import { NotificationsPage } from '../pages/NotificationsPage';
import { ProfilePage } from '../pages/ProfilePage';
import Login from '../pages/auth/Login';
import Landing from '../pages/LandingPage';
import Register from '../pages/auth/Register';
import { ForgotPassword } from '../pages/auth/ForgotPassword';
import { ResetPassword } from '../pages/auth/ResetPassword';
import { VerifyEmail } from '../pages/auth/VerifyEmail';

export const MobileRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MobileLayout />}>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/messages/:conversationId" element={<ConversationPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </Router>
  );
};