import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import UserProfile from '@/sections/user/view/user-profile';
import { getServerSession } from 'next-auth/next';
import React from 'react';

const Profile = async () => {
  return <UserProfile />
};

export default Profile;
