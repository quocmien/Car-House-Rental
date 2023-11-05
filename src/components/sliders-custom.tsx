'use client';

import { useState } from 'react';
import { Sliders } from './ui/sliders';

type SliderProps = React.ComponentProps<typeof Sliders> & {
  isShowValue: boolean;
  prefixValue?: string;
};

export function SlidersCustom({
  isShowValue = false,
  prefixValue,
  className,
  ...props
}: SliderProps) {
  const [value, setValue] = useState([10, 400]);

  const handleValueChange = (value: number[]) => {
    setValue(value);
  };

  return (
    <div className={className}>
      {isShowValue && (
        <div className="flex justify-between px-[2px] py-1 text-white text-[11px] font-bold">
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
        defaultValue={[10, 400]}
        min={10}
        max={400}
        step={10}
        value={value}
        onValueChange={handleValueChange}
        {...props}
      />
    </div>
  );
}
