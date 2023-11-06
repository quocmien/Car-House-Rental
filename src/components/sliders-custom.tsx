'use client';

import { useState } from 'react';
import { Sliders } from './ui/sliders';
import { cn } from '@/lib/utils';

type SliderProps = React.ComponentProps<typeof Sliders> & {
  isShowValue: boolean;
  prefixValue?: string;
  idDark?: boolean;
};

export function SlidersCustom({
  isShowValue = false,
  prefixValue,
  className,
  ...props
}: SliderProps) {
  const [value, setValue] = useState(props.defaultValue || [10, 400]);

  const handleValueChange = (value: number[]) => {
    setValue(value);
  };

  return (
    <div className={className}>
      {isShowValue && (
        <div
          className={cn(
            'flex justify-between px-[2px] py-1 text-white text-[11px] font-bold',
            props.isDark && "text-muted-foreground"
          )}
        >
          <div>
            {prefixValue}
            {value[0]}
          </div>
          <div>
            {prefixValue}
            {value[1]}
          </div>
        </div>
      )}
      <Sliders
        value={value}
        onValueChange={handleValueChange}
        {...props}
      />
    </div>
  );
}
