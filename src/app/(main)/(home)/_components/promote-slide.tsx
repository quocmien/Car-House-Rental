'use client';
import { PROMOTE_LIST } from '@/mock/common';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PromoteItem from './promote-item';

const PromoteSlide = ({ products }: any) => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={10}
      loop={false}
      navigation={{
        nextEl: '.image-swiper-button-next',
        prevEl: '.image-swiper-button-prev',
      }}
      pagination={true}
      modules={[Navigation, Pagination]}
      className="relative !z-0 text-white !pl-[10px] !pb-[60px]"
      style={
        {
          '--swiper-pagination-color': '#fff',
          '--swiper-pagination-bullet-width': '5px',
          '--swiper-pagination-bullet-height': '5px',
          '--swiper-pagination-bullet-horizontal-gap': '5px',
        } as any
      }
    >
      {products?.map((product: any, index: number) => (
        <SwiperSlide
          key={product?.id}
          className="h-full transition-color relative !w-[260px]"
        >
          <PromoteItem
            priceText={`Average Price: $${
              (product?.price * product?.discountPercentage) / 100
            } - $${product?.price}`}
            category={product?.category}
            name={product?.title}
            address="63 Birch Street"
            src={product?.thumbnail}
            star={product.rating}
            review={product.stock}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PromoteSlide;
