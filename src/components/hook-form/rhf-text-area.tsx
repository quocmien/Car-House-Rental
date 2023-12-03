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
import { TextareaUnderline } from '../ui/textarea-underline';
import { Textarea } from '../ui/textarea';

// ----------------------------------------------------------------------

type Props = InputProps & {
  name: string;
  description?: string;
  inputStyle?: 'outline' | 'underline';
};

export default function RHFTextArea({
  name,
  type,
  description,
  inputStyle = 'outline',
  ...other
}: Props) {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }: any) => (
        <FormItem>
          <FormControl>
            {inputStyle === 'underline' ? (
              <TextareaUnderline
                {...field}
                type={type}
                value={type === 'number' && field.value === 0 ? '' : field.value}
                onChange={(event: any) => {
                  if (type === 'number') {
                    field.onChange(Number(event.target.value));
                  } else {
                    field.onChange(event.target.value);
                  }
                }}
                {...other}
              />
            ) : (
              <Textarea {...field} {...other} />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
