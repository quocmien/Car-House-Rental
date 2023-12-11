import React from 'react';
import UserInforForm from '../../components/user-infor-form';
import QRCode from '../qr-code';

import ProductByCategoryId from '../../components/product-by-category-id';
import { Session } from 'next-auth';

const QR_TEXT = process.env.NEXT_PUBLIC_DOMAIN + '/user/profile';

interface IProps {
  session: Session;
  categories: any;
}

const Profile = ({ session, categories }: IProps) => {
  return (
    <div>
      <div className="">
        <h1 className="text-primary text-center text-4xl opacity-80 font-light">
          Your Profile
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="md:col-start-2 md:col-span-4">
          <h3 className="text-primary text-lg mb-[10px]">About you</h3>
          <div className="qr-code__container text-center flex justify-center">
            <QRCode text={QR_TEXT} />
          </div>
          <UserInforForm session={session} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
