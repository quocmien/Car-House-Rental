import { cn } from '@/lib/utils';
import React from 'react';
import { Star as StarIcon } from 'lucide-react';

const active = true;

interface Props {
  value: number;
  isDark?: boolean;
}

const Star = ({ value = 0, isDark = false }: Props) => {
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
            'w-[11px] h-[11px] fill-muted-foreground text-muted-foreground',
            !!val && 'text-primary fill-primary',
            isDark && !!val && 'text-white fill-white',
          )}
        />
      ))}
    </div>
  );
};

export default Star;
