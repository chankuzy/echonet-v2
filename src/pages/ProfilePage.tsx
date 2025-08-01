import { ProfileHeader, UserInfo, ProfileTabs, ProfilePosts, FloatingActionButton } from '../components/profile';
import ThemeToggle from '../components/ThemeToggle';

export const ProfilePage = () => {
  return (
    <div className="max-w-4xl mx-auto pb-20">
        <ThemeToggle />
      <ProfileHeader />
      <UserInfo />
      <ProfileTabs />
      <ProfilePosts />
      <FloatingActionButton />
    </div>
  );
};