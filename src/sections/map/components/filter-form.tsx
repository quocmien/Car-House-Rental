import { SlidersCustom } from '@/components/sliders-custom';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-picker';
import { InputUnderline } from '@/components/ui/input-underline';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DEAL_CATEGORIES, LOCATIONS } from '@/mock/common';
import { Search } from 'lucide-react';
import React from 'react';

const FilterForm = () => {
  return (
    <div>
      <div className="p-5 mb-5">
        <div className="relative bg-[#00000008] rounded-sm px-5 py-[10px]">
          <h2 className="text-[18px] my-[10px] opacity-80">Search</h2>
          <div className="md:grid md:grid-cols-2 md:gap-x-[30px] md:gap-y-[10px]">
            <div className="md:col-span-2">
              <InputUnderline placeholder="Enter keyword" className="w-full" />
            </div>
            <div>
              <Select>
                <SelectTrigger className="shadow-none bg-transparent border-0 border-b-2 border-b-[#00000014] rounded-0 outline-none pl-0">
                  <SelectValue placeholder="Localtion" />
                </SelectTrigger>
                <SelectContent>
                  {LOCATIONS.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="shadow-none bg-transparent border-0 border-b-2 border-b-[#00000014] rounded-0 outline-none pl-0">
                  <SelectValue placeholder="Localtion" />
                </SelectTrigger>
                <SelectContent>
                  {DEAL_CATEGORIES.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <DatePicker
                placeholder="Event Date"
                className="shadow-none bg-transparent border-0 border-b-2 border-b-[#00000014] rounded-0 outline-none pl-0"
              />
            </div>
            <div>
              <SlidersCustom
                className="pb-[40px] pt-[15px]"
                isShowValue
                prefixValue="$"
                isDark
                defaultValue={[140, 270]}
                min={10}
                max={400}
                step={10}
              />
            </div>
          </div>
          <div className="absolute -bottom-[20px] right-5">
            <Button className="w-[45px] h-[45px] flex items-center justify-center bg-primary rounded-full">
              <Search
                strokeWidth={3}
                className="w-[14px] h-[14px] text-white"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
