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
import { Check, MoreVertical, Star } from 'lucide-react';
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
  slug: string;
}

const PromoteItem = ({
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
    <div className="flex flex-col w-full relative">
      {/* Ribbon */}
      {/* {top && (
        <figure
          className={cn(
            'absolute shadow-md bg-primary text-white font-bold uppercase text-[11px] p-[5px] -top-[6px] -right-[6px] z-10',
            'after:content-[""] after:w-0 after:h-0 after:border-solid after:border-t-[6px] after:border-r-[6px] after:border-t-primary after:border-x-transparent after:border-b-transparent after:absolute after:-bottom-[6px] after:right-0 '
          )}
        >
          Top
        </figure>
      )} */}

      {/* Rating */}
      <Link
        href={`/product/${slug}`}
        className="group/item block overflow-hidden relative w-full"
      >
        {/* <div className="group-hover/item:-translate-y-[3px] group-hover/item:will-change-transform transition-all ease-in-out duration-300 absolute bottom-5 left-5 text-white">
          {!!priceText && <figure className="text-xs">{priceText}</figure>}
          <div className="uppercase bg-primary shadow-md text-[9px] font-extrabold inline pt-[0.2em] px-[0.6em] pb-[0.3em] leading-none text-center whitespace-nowrap align-baseline rounded-[0.25em]">
            {category}
          </div>
          <h3 className="text-[21px] font-bold mt-[5px] mb-[2px]">{name}</h3>
          <h4 className="text-sm">{address}</h4>
        </div> */}
        <div
          className={cn(
            'overflow-hidden mb-3 relative block h-auto w-full'
          )}
        >
          <Image
            className="aspect-square group-hover/item:scale-110 transition-all ease-in-out duration-600 scale-[1.01] object-cover"
            src={src}
            width={600}
            height={600}
            alt=""
          />
        </div>
        <div className="flex flex-col text-white">
          <div className="flex justify-between font-bold">
            <div className="truncate flex-1">{address}</div>
            <div className='flex items-center ml-2'>
              <Star strokeWidth={1} fill='#fff' className='w-4 h-4 text-white' />
              <div className='ml-0.5'>{star}</div>
            </div>
          </div>
          <div className='text-primary-foreground'>{category}</div>
          <div className='font-bold'>{priceText}</div>
        </div>
      </Link>

      {/* Additional Info */}
      {/* <div className="px-5 py-[15px] bg-[#fafafa] relative">
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
      </div> */}
    </div>
  );
};

export default PromoteItem;
