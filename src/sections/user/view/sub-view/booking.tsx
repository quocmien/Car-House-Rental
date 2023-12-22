import React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { fDate } from '@/utils/format-time';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

interface IProps {
  bookings: any;
}

const Booking = ({ bookings }: IProps) => {

  return (
    <div>
      <h2 className="text-primary text-center opacity-80 text-[36px] font-light ">
        Booking
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead className="w-[200px]">Product</TableHead>
            <TableHead className="w-[200px]">User</TableHead>
            <TableHead className="w-[200px]">Email</TableHead>
            <TableHead className="w-[200px]">Phone</TableHead>
            <TableHead>First date</TableHead>
            <TableHead>Last Date</TableHead>
            <TableHead className="w-[200px]">Note</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings?.map((item: any, index: number) => {
            const booking = item?.attributes;
            const productName = booking?.product?.data?.attributes?.name;
            const fullName = `${booking?.user?.data?.attributes?.lastName} ${booking?.user?.data?.attributes?.firstName}`
            const email = booking?.user?.data?.attributes?.email || ''
            const phone = booking?.user?.data?.attributes?.phone || ''
            const note = booking?.note
            return (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-medium">{productName}</TableCell>
                <TableCell className="font-medium">{fullName}</TableCell>
                <TableCell className="font-medium">{email}</TableCell>
                <TableCell className="font-medium">{phone}</TableCell>
                <TableCell>{fDate(booking?.last_date, 'dd/MM/yyyy')}</TableCell>
                <TableCell className="font-medium">{note}</TableCell>
                <TableCell
                  className={cn(
                    'font-bold uppercase',
                    booking?.status === 'accept' && 'text-cyan-500',
                    booking?.status === 'request' && 'text-orange-500',
                    booking?.status === 'done' && 'text-green-500',
                    booking?.status === 'cancel' && 'text-red-500'
                  )}
                >
                  {booking?.status}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
};

export default Booking;
