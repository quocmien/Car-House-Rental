import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React from 'react';

const NavItems = () => {
  return (
    <div className="flex items-center">
      <div className="hidden md:flex border-r-[1px] pr-[15px] mr-[15px]">
        Primary nav
      </div>
      <div className="border-r-[1px] pr-[15px] mr-[10px]">Primary nav</div>
      <div>
        <Button className="rounded-full font-bold">
          <Plus className="w-4 h-4 text-white " />
          <span className="hidden md:block text-xs">ADD LISTING</span>
        </Button>
      </div>
    </div>
  );
};

export default NavItems;
