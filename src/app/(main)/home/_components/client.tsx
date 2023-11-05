'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const Client = () => {
  return (
    <Swiper
      slidesPerView="auto"
      loop={false}
      auto
      pagination={true}
      modules={[Navigation, Pagination]}
      autoplay={false}
      className="relative !z-0 !pl-[10px] !pb-[30px] -top-[30px]"
      style={{
        '--swiper-pagination-color': '#000',
        '--swiper-pagination-bullet-width': '5px',
        '--swiper-pagination-bullet-height': '5px',
        '--swiper-pagination-bullet-horizontal-gap': '5px',
      }}
    >
      <SwiperSlide className="relative">
        <blockquote className="flex flex-col items-center justify-center py-[10px] px-5">
          <div className="rounded-full shadow-md w-[95px] h-[95px] mb-[30px]">
            <div
              className="rounded-full h-full overflow-hidden -z-10 w-full opacity-30 bg-cover"
              style={{ backgroundImage: "url('/img/person-01.jpg')" }}
            >
              <Image
                className="object-cover h-full hidden"
                src="/img/person-01.jpg"
                fill
                alt=""
              />
            </div>
          </div>
          <h3 className="text-[18px] text-primary">Jane Woodstock</h3>
          <h4 className="mt-[3px] mb-[10px] opacity-50 text-xs font-bold">
            CEO at ArtBrands
          </h4>
          <p className="text-sm italic text-muted-foreground text-center">
            Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu
            enim, scelerisque gravida lacus vel.
          </p>
        </blockquote>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <blockquote className="flex flex-col items-center justify-center py-[10px] px-5">
          <div className="rounded-full shadow-md w-[95px] h-[95px] mb-[30px]">
            <div
              className="rounded-full h-full overflow-hidden -z-10 w-full opacity-30 bg-cover"
              style={{ backgroundImage: "url('/img/person-01.jpg')" }}
            >
              <Image
                className="object-cover h-full hidden"
                src="/img/person-01.jpg"
                fill
                alt=""
              />
            </div>
          </div>
          <h3 className="text-[18px] text-primary">Jane Woodstock</h3>
          <h4 className="mt-[3px] mb-[10px] opacity-50 text-xs font-bold">
            CEO at ArtBrands
          </h4>
          <p className="text-sm italic text-muted-foreground text-center">
            Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu
            enim, scelerisque gravida lacus vel.
          </p>
        </blockquote>
      </SwiperSlide>
    </Swiper>
  );
};

export default Client;
