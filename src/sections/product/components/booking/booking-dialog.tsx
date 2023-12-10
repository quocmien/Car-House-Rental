'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useBoolean } from '@/hooks/use-boolean';
import { DialogProps } from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import BookingForm from './booking-form';
import { Session } from 'next-auth';

interface IProps {
  children: ReactNode;
  productId: string;
  session?: Session;
}

export function BookingDialog({
  children,
  productId,
  session,
  ...other
}: IProps & DialogProps) {
  const open = useBoolean(false);

  return (
    <Dialog
      {...other}
      open={open.value}
      onOpenChange={(status) => (status ? open.onTrue() : open.onFalse())}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <span className="text-primary">Reserve</span>
          </DialogTitle>
        </DialogHeader>

        <BookingForm session={session!} productId={productId} onSuccess={open.onFalse} />
      </DialogContent>
    </Dialog>
  );
}
