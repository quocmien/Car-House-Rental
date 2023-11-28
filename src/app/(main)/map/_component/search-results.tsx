import React from 'react';
import PlaceItem from '../../(home)/_components/place-item';
import { ScrollArea } from '@/components/ui/scroll-area';

const SearchResults = ({ products }: any) => {
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
          {products?.map((item: any, index: number) => {
            const product = item?.attributes;

            return (
              <div key={item?.id}>
                <PlaceItem
                  // priceText={`Average Price: $${
                  //   (product?.price * product?.discountPercentage) / 100
                  // } - $${product?.price}`}
                  priceText={`Average Price: $${product?.displayPrice}`}
                  category={product?.category?.data?.attributes?.name}
                  name={product?.name}
                  address={product?.address}
                  src={
                    product?.image?.data?.attributes?.formats?.medium?.url || product?.image?.data?.attributes?.url
                  }
                  verified
                  top
                  star={2}
                  review={6}
                  slug={product?.slug}
                />
              </div>
            );
          })}
        </div>
      </div>
    </ScrollArea>
  );
};

export default SearchResults;
