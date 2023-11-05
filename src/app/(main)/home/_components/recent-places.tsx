import { Button } from '@/components/ui/button';
import PlaceItem from './place-item';
import { MoveRight } from 'lucide-react';

const RecentPlaces = () => {
  return (
    <section className="block-section">
      <div className="container">
        <div className="mt-[15px] mb-[50px]">
          <h2 className="text-primary text-center opacity-80 text-[36px] font-light ">
            Recent Places
          </h2>
          <h3 className="text-foreground text-center opacity-60 text-base mb-[15px] mt-[10px]">
            Fusce eu mollis dui, varius convallis mauris. Nam dictum id
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[30px]">
          <div className="">
            <PlaceItem
              priceText="Average Price: $8 - $30"
              category="Restaurant"
              name="Marky’s Restaurant"
              address="63 Birch Street"
              src="/img/items/1.jpg"
              verified
              top
            />
          </div>
          <div className="">
            <PlaceItem
              priceText="Average Price: $8 - $30"
              category="Restaurant"
              name="Marky’s Restaurant"
              address="63 Birch Street"
              src="/img/items/1.jpg"
              verified
              top
            />
          </div>
          <div className="md:col-span-3">
            <PlaceItem
              priceText="Average Price: $8 - $30"
              category="Restaurant"
              name="Marky’s Restaurant"
              address="63 Birch Street"
              src="/img/items/1.jpg"
            />
          </div>
          <div className="md:col-span-2">
            <PlaceItem
              priceText="Average Price: $8 - $30"
              category="Restaurant"
              name="Marky’s Restaurant"
              address="63 Birch Street"
              src="/img/items/1.jpg"
            />
          </div>
          <div className="md:col-span-1">
            <PlaceItem
              priceText="Average Price: $8 - $30"
              category="Restaurant"
              name="Marky’s Restaurant"
              address="63 Birch Street"
              src="/img/items/1.jpg"
            />
          </div>
          <div className="md:col-span-2">
            <PlaceItem
              priceText="Average Price: $8 - $30"
              category="Restaurant"
              name="Marky’s Restaurant"
              address="63 Birch Street"
              src="/img/items/1.jpg"
            />
          </div>
        </div>

        {/* View All */}
        <div className="w-full flex justify-center items-center pt-[30px]">
          <a
            className="border-2 rounded-full font-bold px-3 py-[6px] hover:bg-transparent hover:border-[#0000004d] flex items-center"
          >
            <span className="text-xs uppercase mr-2 text-primary">View all listings</span>
            <MoveRight strokeWidth={0.5} className='text-primary' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentPlaces;
