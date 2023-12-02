import Image from 'next/image';
import React from 'react';

const Partner = () => {
  return (
    <section className="block-section">
      <div className="container">
        <div className="flex justify-center items-center mt-[15px] mb-[50px]">
          <h5 className="opacity-40 text-sm">Partners</h5>
        </div>
        <div className="grid grid-cols-5">
          <a href="#" className="opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out">
            <Image
              src="/img/logo-1.png"
              width={111}
              height={48}
              className="object-contain h-12"
              alt={''}
            />
          </a>
          <a href="#" className="opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out">
            <Image
              src="/img/logo-2.png"
              width={111}
              height={48}
              className="object-contain h-12"
              alt={''}
            />
          </a>
          <a href="#" className="opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out">
            <Image
              src="/img/logo-3.png"
              width={111}
              height={48}
              className="object-contain h-12"
              alt={''}
            />
          </a>
          <a href="#" className="opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out">
            <Image
              src="/img/logo-4.png"
              width={111}
              height={48}
              className="object-contain h-12"
              alt={''}
            />
          </a>
          <a href="#" className="opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out">
            <Image
              src="/img/logo-5.png"
              width={111}
              height={48}
              className="object-contain h-12"
              alt={''}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partner;
