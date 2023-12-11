'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Session } from 'next-auth';
import Booking from './sub-view/booking';
import Product from './sub-view/product';
import Profile from './sub-view/profile';

interface IProps {
  session: Session;
  categories: any;
  products: any;
  bookings: any;
}

const UserTab = ({ session, categories, products, bookings }: IProps) => {
  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="product">Product</TabsTrigger>
        <TabsTrigger value="booking">Booking</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <Profile session={session} categories={categories} />
      </TabsContent>
      <TabsContent value="product">
        <Product
          session={session}
          categories={categories}
          products={products}
        />
      </TabsContent>
      <TabsContent value="booking">
        <Booking bookings={bookings} />
      </TabsContent>
    </Tabs>
  );
};

export default UserTab;
