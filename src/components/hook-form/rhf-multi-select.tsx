import { SelectProps } from '@radix-ui/react-select';
import { useFormContext } from 'react-hook-form';
import { MultiSelect, OptionsMultiSelect } from '../multi-select/multi-select';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';

// ----------------------------------------------------------------------

type RHFSelectProps = SelectProps & {
  name: string;
  description?: string;
  placeholder?: string;
  options: OptionsMultiSelect[]
};

export default function RHFMultiSelect({
  name,
  description,
  placeholder,
  options,
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
            <MultiSelect placeholder={placeholder} options={options} {...field} {...other} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
