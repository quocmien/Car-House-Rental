import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input, InputProps } from '../ui/input';
import { InputUnderline } from '../ui/input-underline';

// ----------------------------------------------------------------------

type Props = InputProps & {
  name: string;
  description?: string;
  inputStyle?: 'input' | 'input-underline';
};

export default function RHFInput({
  name,
  type,
  description,
  inputStyle = 'input',
  ...other
}: Props) {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            {inputStyle === 'input-underline' ? (
              <InputUnderline
                {...field}
                type={type}
                value={type === 'number' && field.value === 0 ? '' : field.value}
                onChange={(event) => {
                  if (type === 'number') {
                    field.onChange(Number(event.target.value));
                  } else {
                    field.onChange(event.target.value);
                  }
                }}
                {...other}
              />
            ) : (
              <Input {...field} {...other} />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
