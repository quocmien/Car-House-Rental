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
import { CalendarProps } from '../ui/calendar';

export type RHFDatePickerProps = DatePickerProps &
  CalendarProps & {
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
  inputFormat,
  ...other
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
              inputFormat={inputFormat || DATE_FORMAT}
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
              {...other}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
