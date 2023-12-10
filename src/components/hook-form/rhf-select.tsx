import { Controller, useFormContext } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from '../ui/form';
import { SelectProps } from '@radix-ui/react-select';

// ----------------------------------------------------------------------

type RHFSelectProps = SelectProps & {
  name: string;
  children: React.ReactNode;
  description?: string;
  placeholder?: string;
};

export default function RHFSelect({
  name,
  description,
  children,
  placeholder,
  ...other
}: RHFSelectProps) {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Select onValueChange={field.onChange} {...field} {...other}>
              <SelectTrigger className="shadow-none bg-transparent border-0 border-b-2 border-b-[#00000014] rounded-0 outline-none pl-0">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>{children}</SelectContent>
            </Select>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
