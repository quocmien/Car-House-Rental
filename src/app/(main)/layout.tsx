'use client';

import Footer from './(home)/_components/footer';
import Navbar from './_components/navbar';

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
