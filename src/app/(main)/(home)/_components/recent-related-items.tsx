import React from 'react';
import PlaceItem from './place-item';
import Client from './client';

const RecentRelatedItems = () => {
  return (
    <section className="block-section">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-[30px]">
          <div className="lg:col-span-9 ">
            <div className="mt-[15px] mb-[50px]">
              <h2 className="text-primary opacity-80 text-[36px] font-light ">
                Recently Rated Items
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px]">
              <div className="md:col-span-3">
                <PlaceItem
                  priceText="Average Price: $8 - $30"
                  category="Restaurant"
                  name="Marky’s Restaurant"
                  address="63 Birch Street"
                  src="/img/items/1.jpg"
                  star={2}
                  review={6}
                  verified
                  top
                />
              </div>
              <div className="md:col-span-5">
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
              <div className="md:col-span-4">
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
          <div className="lg:col-span-3">
            <div className="mt-[15px] mb-[50px]">
              <h2 className="text-primary opacity-80 text-[36px] font-light ">
                Client’s Word
              </h2>
            </div>
            <div className='container bg-[#fafafa] shadow-lg'>
              <Client />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentRelatedItems;
