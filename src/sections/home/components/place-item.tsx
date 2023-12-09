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
import { Check, Heart, MoreVertical, Star } from 'lucide-react';
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
    <div className="flex flex-col w-full relative">
      {/* Wish list */}
      {/* <div className='absolute top-2 right-2 z-10 cursor-pointer'>
        <Heart strokeWidth={2} fill='#7D7D7D33' className='w-6 h-6 text-white' />
      </div> */}

      {/* Rating */}
      <Link
        href={`/product/${slug}`}
        className="group/item block overflow-hidden relative w-full"
      >
        <div
          className={cn(
            'overflow-hidden mb-3 relative block h-auto w-full'
          )}
        >
          <Image
            className="aspect-square group-hover/item:scale-110 transition-all ease-in-out duration-600 scale-[1.01]"
            src={src}
            width={600}
            height={600}
            alt=""
          />
        </div>
        <div className="flex flex-col text-foreground">
          <div className="flex justify-between font-bold">
            <div title={address} className="truncate flex-1">{address}</div>
            <div className='flex items-center ml-2'>
              <Star strokeWidth={1} fill='#000' className='w-4 h-4 text-black' />
              <div className='ml-0.5'>{star}</div>
            </div>
          </div>
          <div title={name}className='text-muted-foreground truncate'>{name}</div>
          <div className='font-bold'>{priceText}</div>
        </div>
      </Link>

    </div>
  );
};

export default PlaceItem;
