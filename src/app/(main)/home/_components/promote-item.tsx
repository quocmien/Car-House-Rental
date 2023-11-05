'use client';
import Star from '@/components/star';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { useBoolean } from '@/hooks/use-boolean';
import { cn } from '@/lib/utils';
import { HoverCardArrow } from '@radix-ui/react-hover-card';
import { MoreVertical } from 'lucide-react';
import Image from 'next/image';

interface Props {
  priceText?: string;
  category?: string;
  name?: string;
  address?: string;
  src: string;
  star?: number;
  review?: number;
}

const PromoteItem = ({
  priceText,
  category,
  name,
  address,
  src,
  star = 0,
  review = 0,
}: Props) => {
  const control = useBoolean();

  return (
    <div className="flex flex-col shadow-md w-full relative">
      {/* Rating */}
      <a
        href="/detail"
        className="group/item block h-[220px] overflow-hidden relative"
      >
        <div className="group-hover/item:-translate-y-[3px] group-hover/item:will-change-transform transition-all ease-in-out duration-300 absolute bottom-5 left-5 text-white">
          {!!priceText && <figure className="text-xs">{priceText}</figure>}
          <div className="uppercase bg-transparent border border-white shadow-md text-[9px] font-extrabold inline pt-[0.2em] px-[0.6em] pb-[0.3em] leading-none text-center whitespace-nowrap align-baseline rounded-[0.25em]">
            {category}
          </div>
          <h3 className="text-[21px] font-bold mt-[5px] mb-[2px]">{name}</h3>
          <h4 className="text-sm">{address}</h4>
        </div>
        <div
          className={cn(
            'group-hover/item:scale-110 transition-all ease-in-out duration-600 absolute w-full h-full hidde scale-[1.01] bg-cover top-0 left-0 overflow-auto -z-10 after:opacity-70',
            'after:bg-gradient-to-b after:from-transparent after:to-black after:bg-[#00000033] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:content-[""]'
          )}
          style={{ backgroundImage: `url(${src})` }}
        >
          <Image className="h-full hidden" src={src} fill alt="" />
        </div>
      </a>

      {/* Additional Info */}
      <div
        className={cn(
          "px-5 py-[15px] bg-primary shadow-md relative",
          'after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full bg-[#0000004d] after:-z-10'
        )}
      >
        <div className="flex items-center">
          <span className="mr-[5px]">
            <Star value={star} isDark />
          </span>
          <span className="text-[11px] text-muted-foreground">({review})</span>
        </div>
        <div
          className="absolute cursor-pointer right-[15px] top-0 bottom-0 m-auto h-[27px]"
          onClick={control.onToggle}
        >
          <HoverCard open={control.value} openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <MoreVertical className="text-muted-foreground" />
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

export default PromoteItem;
