'use client';
import StarRating from '@/components/star-rating';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { useBoolean } from '@/hooks/use-boolean';
import { cn } from '@/lib/utils';
import { HoverCardArrow } from '@radix-ui/react-hover-card';
import { Check, MoreVertical } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  priceText?: string;
  category?: string;
  name?: string;
  address?: string;
  src: string;
  star?: number;
  review?: number;
  verified?: boolean;
  top?: boolean;
  slug: string
}

const PlaceItem = ({
  priceText,
  category,
  name,
  address,
  src,
  slug,
  verified = false,
  top = false,
  star = 0,
  review = 0,
}: Props) => {
  const control = useBoolean();

  return (
    <div className="flex flex-col shadow-md w-full relative">
      {/* Ribbon */}
      {top && (
        <figure
          className={cn(
            'absolute shadow-md bg-primary text-white font-bold uppercase text-[11px] p-[5px] -top-[6px] -right-[6px] z-10',
            'after:content-[""] after:w-0 after:h-0 after:border-solid after:border-t-[6px] after:border-r-[6px] after:border-t-primary after:border-x-transparent after:border-b-transparent after:absolute after:-bottom-[6px] after:right-0 '
          )}
        >
          Top
        </figure>
      )}

      {/* Rating */}
      <Link
        href={`/detail/${slug}`}
        className="group/item block h-[220px] overflow-hidden relative"
      >
        <div className="group-hover/item:-translate-y-[3px] group-hover/item:will-change-transform transition-all ease-in-out duration-300 absolute bottom-5 left-5 text-white">
          {!!priceText && <figure className="text-xs">{priceText}</figure>}
          <div className="uppercase bg-primary shadow-md text-[9px] font-extrabold inline pt-[0.2em] px-[0.6em] pb-[0.3em] leading-none text-center whitespace-nowrap align-baseline rounded-[0.25em]">
            {category}
          </div>
          <h3 className="text-[21px] font-bold mt-[5px] mb-[2px]">{name}</h3>
          <h4 className="text-sm">{address}</h4>
        </div>
        <div
          className={cn(
            'group-hover/item:scale-110 transition-all ease-in-out duration-600 absolute w-full h-full hidde scale-[1.01] top-0 left-0 overflow-auto -z-10 after:opacity-70  bg-center bg-contain bg-no-repeat',
            'after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:content-[""]'
          )}
          style={{ backgroundImage: `url(${src})` }}
        >
          <Image className="h-full hidden" src={src} fill alt="" />
        </div>
      </Link>

      {/* Additional Info */}
      <div className="px-5 py-[15px] bg-[#fafafa] relative">
        {verified && (
          <div className="absolute -top-[15px] left-5 bg-white rounded-full shadow-md w-[30px] h-[30px] flex justify-center items-center">
            <Check strokeWidth={3} className="w-3 h-3 text-primary" />
          </div>
        )}
        <div className="flex items-center">
          <span className="mr-[5px]">
            <StarRating value={star} />
          </span>
          <span className="text-[11px] ">({review})</span>
        </div>
        <div
          className="absolute cursor-pointer right-[15px] top-0 bottom-0 m-auto h-[27px]"
          onClick={control.onToggle}
        >
          <HoverCard open={control.value} openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <MoreVertical className="text-black opacity-30" />
            </HoverCardTrigger>
            <HoverCardContent
              className="border-none p-0 w-auto"
              side="top"
              align="end"
            >
              <ul className="text-right text-sm">
                <li className="border-b px-[10px] py-[7px]">
                  <a href="">Add to favorites</a>
                </li>
                <li className="border-b px-[10px] py-[7px]">
                  <a href="">Add to watchlist</a>
                </li>
                <li className="border-b px-[10px] py-[7px]">
                  <a href="">Quick detail</a>
                </li>
              </ul>
              <HoverCardArrow className="fill-[#fafafa] shadow-lg" />
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

export default PlaceItem;
