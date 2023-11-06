import React from 'react';
import PlaceItem from '../../(home)/_components/place-item';
import { ScrollArea } from '@/components/ui/scroll-area';

const SearchResults = () => {
  return (
    <ScrollArea className="h-[639px]">
      <div className="p-5">
        <div className="flex gap-[10px] items-center mb-[20px]">
          <h2 className="text-primary opacity-80 text-[30px] font-light ">
            Search Results
          </h2>
          <div className="text-[22px] text-[#00000066] font-light">(6)</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          <div>
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
          <div>
            <PlaceItem
              priceText="Average Price: $8 - $30"
              category="Restaurant"
              name="Marky’s Restaurant"
              address="63 Birch Street"
              src="/img/items/1.jpg"
              verified
              top
              star={2}
              review={6}
            />
          </div>
          <div>
            <PlaceItem
              priceText="Average Price: $8 - $30"
              category="Restaurant"
              name="Marky’s Restaurant"
              address="63 Birch Street"
              src="/img/items/1.jpg"
              star={2}
              review={6}
            />
          </div>
          <div>
            <PlaceItem
              priceText="Average Price: $8 - $30"
              category="Restaurant"
              name="Marky’s Restaurant"
              address="63 Birch Street"
              src="/img/items/1.jpg"
              star={2}
              review={6}
            />
          </div>
          <div>
            <PlaceItem
              priceText="Average Price: $8 - $30"
              category="Restaurant"
              name="Marky’s Restaurant"
              address="63 Birch Street"
              src="/img/items/1.jpg"
              star={2}
              review={6}
            />
          </div>
          <div>
            <PlaceItem
              priceText="Average Price: $8 - $30"
              category="Restaurant"
              name="Marky’s Restaurant"
              address="63 Birch Street"
              src="/img/items/1.jpg"
              star={2}
              review={6}
            />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default SearchResults;
