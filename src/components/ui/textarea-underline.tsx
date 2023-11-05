import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextareaUnderline = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'shadow-none bg-transparent border-b-2 border-b-[#00000014] rounded-0  transition-all duration-300 text-sm outline-none p-3 px-0 ',
          'active:pl-3 focus:pl-3',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
TextareaUnderline.displayName = 'Textarea';

export { TextareaUnderline };
