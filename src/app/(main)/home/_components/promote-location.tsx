import { ChevronLeft, ChevronRight } from 'lucide-react';
import PromoteSlide from './promote-slide';

const PromoteLocation = () => {
  return (
    <section className="block-section bg-primary ">
      <div className="container">
        <div className="mt-[15px] mb-[50px] flex items-center">
          <h2 className="text-white opacity-80 text-[36px] font-light flex-1 justify-between">
            Promoted Locations
          </h2>
          <div className="flex flex-nowrap">
            <a className="hidden md:flex mr-[15px] border-2 rounded-full font-bold px-3 py-[6px] hover:bg-primary/80 items-center cursor-pointer">
              <span className="text-xs uppercase text-white">
                Promote yours
              </span>
            </a>
            <div className="flex flex-nowrap space-x-1">
              <div className="image-swiper-button-prev h-9 w-9 rounded-full flex justify-center items-center border-2 cursor-pointer">
                <ChevronLeft strokeWidth={2} className="w-6 h-6 text-white" />
              </div>
              <div className="image-swiper-button-next h-9 w-9 rounded-full flex justify-center items-center border-2 cursor-pointer">
                <ChevronRight strokeWidth={2} className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <PromoteSlide />
      </div>
    </section>
  );
};

export default PromoteLocation;
