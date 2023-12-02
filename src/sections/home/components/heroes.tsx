import { cn } from '@/lib/utils';
import Image from 'next/image';

const Heroes = () => {
  return (
    <section
      className={cn(
        'flex flex-col items-center justify-center relative text-center w-full',
        `md:h-[calc(100vh_-_43px)]`
      )}
    >
      <div className="px-[20px] pb-[20px] pt-[5px] mb-[20px]">
        <h1 className="text-white mt-[20px] mb-[10px] text-[38px] md:text-[54px]">
          Best Deals in One Place
        </h1>
        <h2 className="text-[20px] md:text-[24px] text-white opacity-50 mt-[5px] mb-[10px]">
          With Locations you can find the best deals in your location
        </h2>
      </div>
      <div className="w-full h-full absolute top-0 left-0 overflow-hidden bg-black -z-10">
        <div
          className="absolute top-0 left-0 h-full overflow-hidden -z-10 w-full opacity-30 bg-cover "
          style={{ backgroundImage: "url('https://res.cloudinary.com/cinsio68/image/upload/v1701337327/cq5dam_web_2160_2160_6e170abc82.avif')" }}
        >
          <Image
            className="object-cover h-full hidden"
            src="https://res.cloudinary.com/cinsio68/image/upload/v1701337327/cq5dam_web_2160_2160_6e170abc82.avif"
            fill
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Heroes;
