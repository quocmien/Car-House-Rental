import Breadcrumb from '@/sections/product/components/breadcrumb';
import React from 'react';
import UserInforForm from '../components/user-infor-form';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import { getServerSession } from 'next-auth/next';

const UserProfile = async () => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  if (!session) {
    return (
      <div>
        Please Sign In!
      </div>
    )
  }

  return (
    <div>
      <Breadcrumb />
      <section className="block">
        <h1 className="container text-primary text-center text-4xl opacity-80 font-light">
          Your Profile
        </h1>
      </section>
      <section className="block">
        <div className="container">
          <div className="grid grid-cols-6 gap-4">
            <div className="md:col-start-2 md:col-span-4">
              <h3 className="text-primary text-lg mb-[10px]">About you</h3>
              <UserInforForm session={session} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
