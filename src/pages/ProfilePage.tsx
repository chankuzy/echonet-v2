import { ProfileHeader, UserInfo, ProfileTabs } from '../components/Profile';

export const ProfilePage = () => {
  return (
    <div className="max-w-4xl mx-auto pb-24 scroll-thin">
      <ProfileHeader />
      <UserInfo />
      <ProfileTabs />
    </div>
  );
};