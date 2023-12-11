import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';


import Editor, { EditorProps } from '../editor';
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from '../ui/form';

// ----------------------------------------------------------------------

interface Props extends EditorProps {
  name: string;
  description?: string;
}

export default function RHFEditor({ name, description, ...other }: Props) {
  const {
    control,
    watch,
    setValue,
    formState: { isSubmitSuccessful },
  } = useFormContext();

  const values = watch();

  useEffect(() => {
    if (values[name] === '<p><br></p>') {
      setValue(name, '', {
        shouldValidate: !isSubmitSuccessful,
      });
    }
  }, [isSubmitSuccessful, name, setValue, values]);

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Editor
              id={name}
              value={field.value}
              onChange={field.onChange}
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
