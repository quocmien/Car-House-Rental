'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { PROMOTE_LIST } from '@/mock/common';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlide = ({ product }: any) => {
  return (
    <section className="mt-[5px] mb-[10px]">
      <Swiper
        slidesPerView="auto"
        spaceBetween={0}
        loop={true}
        navigation={{
          nextEl: '.detail-swiper-button-next',
          prevEl: '.detail-swiper-button-prev',
        }}
        pagination={false}
        modules={[Navigation, Pagination]}
      >
        {!!product?.previews?.data?.length &&
          product?.previews?.data?.map((item: any) => {
            const src = item?.attributes?.formats?.large?.url || item?.attributes?.url || ''

            return (
              <SwiperSlide key={item.id} className="!w-[550px]">
                <div className="w-[550px] h-[200px] md:h-[360px]">
                  <Image
                    src={src}
                    width={550}
                    height={360}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="container flex justify-end md:justify-center mt-[5px] md:mt-0">
        <div className="flex flex-nowrap">
          <div className="detail-swiper-button-prev h-9 w-9 flex justify-center items-center cursor-pointer bg-primary">
            <ChevronLeft strokeWidth={2} className="w-6 h-6 text-white" />
          </div>
          <div className="detail-swiper-button-next h-9 w-9 flex justify-center items-center cursor-pointer bg-primary">
            <ChevronRight strokeWidth={2} className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlide;
