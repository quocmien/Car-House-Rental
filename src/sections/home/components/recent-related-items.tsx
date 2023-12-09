import React from 'react';
import PlaceItem from './place-item';
import Client from './client';

const spanCol = [3, 5, 4];

const RecentRelatedItems = ({ products }: any) => {
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
              {products?.slice(0, 3)?.map((item: any, index: number) => {
                const product = item?.attributes;

                return (
                  <div
                    key={item?.id}
                    className={`md:col-span-4`}
                  >
                    <PlaceItem
                      // priceText={`Average Price: $${
                      //   (product?.price * product?.discountPercentage) / 100
                      // } - $${product?.price}`}
                      priceText={`${product?.displayPrice}`}
                      category={product?.category?.data?.attributes?.name}
                      name={product?.name}
                      address={product?.address}
                      src={
                        product?.image?.data?.attributes?.formats?.medium
                          ?.url || product?.image?.data?.attributes?.url
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
          <div className="lg:col-span-3">
            <div className="mt-[15px] mb-[50px]">
              <h2 className="text-primary opacity-80 text-[36px] font-light ">
                Client’s Word
              </h2>
            </div>
            <div className="container bg-[#fafafa] shadow-lg">
              <Client />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentRelatedItems;
