// form
import { useFormContext } from 'react-hook-form';
// config
import { DATE_FORMAT } from '@/configs/global-configs';
import { DatePicker, DatePickerProps } from '../ui/date-picker';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';

export type RHFDatePickerProps = DatePickerProps & {
  name: string;
  datePickerProps?: DatePickerProps;
  description?: string;
  placeholder?: string;
  onSubmit?: (selectedDates?: any) => void;
};

export default function RHFDatePicker({
  name,
  onSubmit,
  description,
  datePickerProps,
  placeholder,
}: RHFDatePickerProps) {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <DatePicker
              {...field}
              inputFormat={DATE_FORMAT}
              mode="single"
              initialFocus
              selected={field.value}
              value={field.value}
              onSelect={field.onChange}
              placeholder={placeholder}
              {...datePickerProps}
              onClose={() => {
                const selectedDate = field.value;
                if (!!onSubmit) {
                  onSubmit(selectedDate);
                }
              }}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
