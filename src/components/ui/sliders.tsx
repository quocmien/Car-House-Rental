'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

type SliderProps = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
> & {
  isDark?: boolean;
};

const Sliders = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className={cn(
        'relative h-[2px] w-full grow overflow-hidden rounded-full bg-primary/80',
        props.isDark && "bg-[#00000014]"
      )}
    >
      <SliderPrimitive.Range className={cn('absolute h-full bg-secondary', props.isDark && "bg-primary")} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        'block h-[10px] w-[10px] rounded-full border-2 border-secondary bg-primary ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50',
        props.isDark && "bg-white border-primary"
      )}
    />
    <SliderPrimitive.Thumb
      className={cn(
        'block h-[10px] w-[10px] rounded-full border-2 border-secondary bg-primary ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50',
        props.isDark && "bg-white border-primary"
      )}
    />
  </SliderPrimitive.Root>
));
Sliders.displayName = SliderPrimitive.Root.displayName;

export { Sliders };
