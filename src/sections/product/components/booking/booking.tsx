import { cn } from '@/lib/utils';
import React from 'react';
import BookingForm from './booking-form';
import { Session, getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';

interface IProps {
  className: string;
  productId: string;
  session?: Session;
}

const Booking = async ({ className, productId, session }: IProps) => {
  return (
    <div className={cn(className)}>
      <h2 className="text-[26px] text-primary font-light mb-5">Reserve</h2>
      {session ? (
        <BookingForm productId={productId} session={session} />
      ) : (
        <div className="text-red-500">Please Sign In to Reserver!</div>
      )}
    </div>
  );
};

export default Booking;
