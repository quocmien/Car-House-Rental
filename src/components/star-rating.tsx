import { cn } from '@/lib/utils';
import React from 'react';
import { Star as StarIcon } from 'lucide-react';

const active = true;

interface Props {
  value: number;
  isDark?: boolean;
}

const StarRating = ({ value = 0, isDark = false }: Props) => {
  let arr = new Array(5);
  arr.fill(null);
  arr.fill(1, 0, value);

  return (
    <div className="flex space-x-[1px]">
      {arr.map((val, idx) => (
        <StarIcon
          key={idx}
          strokeWidth={0.5}
          className={cn(
            'w-[11px] h-[11px] fill-black opacity-10',
            isDark && "fill-white",
            !!val && 'text-primary fill-primary opacity-100',
            isDark && !!val && 'text-white fill-white opacity-100',
          )}
        />
      ))}
    </div>
  );
};

export default StarRating;
