'use client';

import Footer from '@/sections/home/components/footer';
import Navbar from '@/sections/main/components/navbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
