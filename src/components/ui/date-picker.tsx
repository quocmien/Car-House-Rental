'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar, CalendarProps } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useBoolean } from '@/hooks/use-boolean';

export interface DatePickerProps {
  placeholder?: string;
  className?: string;
  value?: number | Date;
  inputFormat?: string;
  underline?: boolean;
  onClose?: VoidFunction;
}

export function DatePicker({
  placeholder,
  className,
  value,
  inputFormat,
  onClose,
  underline = false,
  ...field
}: DatePickerProps & CalendarProps) {
  const open = useBoolean();
  return (
    <Popover
      open={open.value}
      onOpenChange={(status) => {
        !status && !!onClose && onClose();
        return status ? open.onTrue() : open.onFalse();
      }}
    >
      <PopoverTrigger className="h-11" asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start text-left font-normal',
            className,
            underline && 'border-0 border-b-2'
          )}
        >
          {value ? (
            format(value, inputFormat || 'dd/MM/yyyy')
          ) : (
            <span>{placeholder || 'Pick a date'}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar {...field} />
      </PopoverContent>
    </Popover>
  );
}
