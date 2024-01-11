import UserProfile from '@/sections/user/view/user-profile';

export async function generateMetadata() {
  return {
    title: `Update Profile - StayDriveFinder`,
    metadataBase: new URL('https://staydrivefinder.com'),
    applicationName: process.env.SITE_NAME,
  };
}

const Profile = () => {
  return <UserProfile />;
};

export default Profile;
