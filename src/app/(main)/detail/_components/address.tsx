import MapUI from '@/components/map/google-map';
import React from 'react';

const Address = () => {
  return (
    <section className="block-detail shadow-md ">
      <div className="h-[250px] relative overflow-hidden">
        <MapUI
          center={{ lat: '21.027763', lng: '105.834160' }}
          currentLocation={{ lat: '21.027763', lng: '105.834160' }}
        />
      </div>
      <div className="bg-[#fafafa]">a</div>
    </section>
  );
};

export default Address;
