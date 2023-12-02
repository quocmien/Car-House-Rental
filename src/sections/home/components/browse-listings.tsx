import { Brush } from 'lucide-react';
import BrowseItem from './browse-item';
import { BROWSE_LIST } from '@/mock/common';

const BrowseListings = ({ categories }: any) => {
  return (
    <section className="block-section">
      <div className="container pb-[30px]">
        <div className="mt-[15px] mb-[50px]">
          <h2 className="text-primary text-center opacity-80 text-[36px] font-light ">
            Browse Our Listings
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
          {categories?.map((item: any) => {
            const category = item?.attributes
            
            return (
              <BrowseItem
                key={item?.id}
                icon={Brush}
                title={category?.name}
                items={category?.children?.data}
              />
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default BrowseListings;
