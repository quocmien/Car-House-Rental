import MapUI from '@/components/map/google-map';
import { Button } from '@/components/ui/button';
import { Link, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { USER_DETAIL_QUERY } from '@/graphql/users'
import fetchData from '@/lib/fetch-data';


interface IProps {
  author: any;
  address?: string | '';
  title?: string | 'StayDriveFinder';
}

const Address = async ({ author, address, title }: IProps) => {
  const [{ data: users }] = await Promise.all([
    fetchData(USER_DETAIL_QUERY, {
      filters: {
        username: {
          eq: author?.attributes?.username
        }
      }
    })
  ])
  const user = users?.usersPermissionsUsers?.data[0] || {}
  const fullName = (user?.attributes?.lastName &&  user?.attributes?.firstName)
    ? `${user?.attributes?.lastName} ${user?.attributes?.firstName}`
    : user?.attributes?.username

  return (
    <section className="shadow-md bg-[#fafafa]">
      <div className="h-[250px] relative overflow-hidden">
        <MapUI
          center={{ lat: 21.027763, lng: 105.83416 }}
          currentLocation={{ lat: 21.027763, lng: 105.83416 }}
          address={address}
          title={title}
        />
      </div>
      <div className="bg-[#fafafa] p-[20px]">
        <div className="flex items-center">
          <div className="h-11 w-11">
            <Image
              className="w-full h-full object-contain rounded-full"
              src={user?.attributes?.avatar?.data?.attributes?.url || '/img/logo-2.png'}
              height={40}
              width={116}
              alt={''}
            />
          </div>
          <a className="ml-[10px]" href={user?.attributes?.username ? `/user/${user?.attributes?.username}` : '#'}>
            {fullName}
          </a>
        </div>
        <address className="flex flex-col gap-[5px] not-italic mt-[15px]">
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
            <a target="_blank" href={`/user/${author?.attributes?.username || '#'}`} className="text-sm text-primary">
              {author?.attributes?.username}
            </a>
          </figure>
        </address>
      </div>
    </section>
  );
};

export default Address;
