import MapUI from '@/components/map/google-map';
import { Button } from '@/components/ui/button';
import { Link, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
interface IProps {
  author: Object;
}

const Address = ({ author }: IProps) => {
  return (
    <section className="shadow-md bg-[#fafafa]">
      <div className="h-[250px] relative overflow-hidden">
        <MapUI
          center={{ lat: 21.027763, lng: 105.83416 }}
          currentLocation={{ lat: 21.027763, lng: 105.83416 }}
        />
      </div>
      <div className="bg-[#fafafa] p-[20px]">
        <div className="flex justify-between items-center">
          <div className="h-10">
            <Image
              className="w-full h-full object-contain"
              src={'/img/logo-2.png'}
              height={40}
              width={116}
              alt={''}
            />
          </div>
          <div>
            <Button className="rounded-full font-bold p-0 px-3 w-auto h-6">
              <div className="text-xs uppercase">Claim</div>
            </Button>
          </div>
        </div>
        <div className="py-[30px]">
          <hr />
        </div>
        <address className="flex flex-col gap-[5px] not-italic">
          <figure className="flex items-center">
            <div>
              <MapPin
                strokeWidth={0.5}
                className="w-[14px] h-[14px] mr-4 text-primary"
              />
            </div>
            <div className="text-sm">
              {author?.attributes?.address || 'Can Tho'}
            </div>
          </figure>
          <figure className="flex items-center">
            <div>
              <Mail
                strokeWidth={0.5}
                className="w-[14px] h-[14px] mr-4 text-primary"
              />
            </div>
            <a href="mailto:email@example.com" className="text-sm text-primary">
              {author?.attributes?.email}
            </a>
          </figure>
          <figure className="flex items-center">
            <div>
              <Phone
                strokeWidth={0.5}
                className="w-[14px] h-[14px] mr-4 text-primary"
              />
            </div>
            <div className="text-sm">
            {author?.attributes?.phone}
            </div>
          </figure>
          <figure className="flex items-center">
            <div>
              <Link
                strokeWidth={0.5}
                className="w-[14px] h-[14px] mr-4 text-primary"
              />
            </div>
            <a href={`/user/${author?.attributes?.username || '#'}`} className="text-sm text-primary">
              {author?.attributes?.username}
            </a>
          </figure>
        </address>
      </div>
    </section>
  );
};

export default Address;
