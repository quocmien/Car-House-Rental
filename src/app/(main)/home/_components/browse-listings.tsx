import { Brush } from 'lucide-react';
import BrowseItem from './browse-item';
import { BROWSE_LIST } from '@/mock/common';

const BrowseListings = () => {
  return (
    <section className="block-section">
      <div className="container pb-[30px]">
        <div className="mt-[15px] mb-[50px]">
          <h2 className="text-primary text-center opacity-80 text-[36px] font-light ">
            Browse Our Listings
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
          {BROWSE_LIST.map((item) => (
            <BrowseItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              items={item.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseListings;
