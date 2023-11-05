'use client';
import { PROMOTE_LIST } from '@/mock/common';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PromoteItem from './promote-item';

const PromoteSlide = () => {
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
      style={{
        "--swiper-pagination-color": "#fff",
        "--swiper-pagination-bullet-width": "5px",
        "--swiper-pagination-bullet-height": "5px",
        "--swiper-pagination-bullet-horizontal-gap": "5px"
      }}
    >
      {PROMOTE_LIST.map((item) => (
        <SwiperSlide className="h-full transition-color relative !w-[260px]">
          <PromoteItem
            priceText={item.priceText}
            category={item.category}
            name={item.name}
            address={item.address}
            src={item.src}
            star={item.star}
            review={item.review}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PromoteSlide;
