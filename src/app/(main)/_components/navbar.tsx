'use client';

import { cn } from '@/lib/utils';
import Logo from './logo';
import NavItems from './nav-items';

const Navbar = () => {
  return (
    <div
      className={cn(
        'flex justify-between w-full py-[6px] px-[7px]',
      )}
    >
      <Logo />
      <NavItems />
    </div>
  );
};

export default Navbar;
