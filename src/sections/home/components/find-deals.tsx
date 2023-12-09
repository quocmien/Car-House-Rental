import { Sliders } from '@/components/ui/sliders';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DatePicker } from '@/components/ui/date-picker';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { DEAL_CATEGORIES, LOCATIONS } from '@/mock/common';
import { Search } from 'lucide-react';
import { SlidersCustom } from '@/components/sliders-custom';

const FindDeals = () => {
  return (
    <section className="block-section bg-primary/80 ">
      <div className="container">
        <div className="mt-[15px] mb-[50px]">
          <h2 className="text-white text-center opacity-80 text-[36px] font-light ">
            Find Deals
          </h2>
        </div>
        <form className="flex flex-col space-y-[15px]">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-[15px] sm:gap-x-[30px]">
            <div className="sm:col-span-4 md:col-span-3">
              <Input placeholder="Enter keyword" />
            </div>
            <div className="sm:col-span-4 md:col-span-3">
              <Select>
                <SelectTrigger>
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
            <div className="sm:col-span-4 md:col-span-3">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
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
            {/* <div className="sm:col-span-4 md:col-span-2">
              <DatePicker />
            </div> */}
            <div className="sm:col-span-4 md:col-span-2">
              <SlidersCustom
                className="pb-[30px]"
                isShowValue
                prefixValue="$"
                defaultValue={[10, 400]}
                min={10}
                max={400}
                step={10}
              />
            </div>
            <div className="sm:col-span-4 md:col-span-1">
              <Button className="w-full h-11">
                <Search strokeWidth={3} className="w-3 h-3 font-bold" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col space-y-[15px] md:space-y-0 md:grid md:grid-cols-12 gap-[15px] sm:gap-x-[30px] items-center">
            {/* <div className="md:col-span-9 w-full">
              <div className="grid grid-cols-2 sm:flex flex-wrap gap-[15px] sm:gap-x-[20px]">
                {DEAL_CATEGORIES.map((category) => (
                  <div
                    key={category.value}
                    className="items-center flex space-x-2"
                  >
                    <Checkbox id={category.value} />
                    <label
                      htmlFor={category.value}
                      className="text-[13px] text-white"
                    >
                      {category.label}
                    </label>
                  </div>
                ))}
              </div>
            </div> */}
            {/* <div className="md:col-span-2 w-full">
              <SlidersCustom
                className="pb-[30px]"
                isShowValue
                prefixValue="$"
                defaultValue={[10, 400]}
                min={10}
                max={400}
                step={10}
              />
            </div> */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default FindDeals;
