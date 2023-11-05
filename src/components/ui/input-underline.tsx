import * as React from 'react';

import { cn } from '@/lib/utils';
import { MoveRight } from 'lucide-react';
import { Button } from './button';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputUnderline = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className='w-full flex flex-nowrap'>
        <input
          type={type}
          className={cn(
            'shadow-none bg-transparent border-b-2 border-b-[#00000014] rounded-0  transition-all duration-300 text-sm outline-none p-3 px-0 ',
            'active:pl-3 focus:pl-3',
            className
          )}
          ref={ref}
          {...props}
        />
        <Button variant='ghost' className='h-[46px] border-b-2 border-b-[#00000014] hover:bg-[#0000001a]'>
          <MoveRight strokeWidth={2} className='h-3 w-3 ' />
        </Button>
      </div>
    );
  }
);
InputUnderline.displayName = 'Input';

export { InputUnderline };
