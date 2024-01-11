import { cn } from '@/lib/utils';
import React from 'react';
import BookingForm from './booking-form';
import { Session, getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';

interface IProps {
  className: string;
  productId: string;
  session?: Session;
  links: Array<any> | [];
}

const Booking = async ({ className, productId, session, links }: IProps) => {
  return (
    <div className={cn(className)}>
      <h2 className="text-[26px] text-primary font-light mb-5">Reserve</h2>
      <BookingForm productId={productId} session={session!} links={links} />
    </div>
  );
};

export default Booking;
