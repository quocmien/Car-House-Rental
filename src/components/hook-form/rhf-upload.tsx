import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import Upload from '../upload/upload';
import { UploadProps } from '../upload';
import UploadAvatar from '../upload/upload-avatar';
// import { Upload, UploadProps } from '../upload';

// ----------------------------------------------------------------------

interface Props extends Omit<UploadProps, 'file'> {
  name: string;
  multiple?: boolean;
  description?: string;
}

export default function RHFUpload({
  name,
  multiple = false,
  description,
  ...other
}: Props) {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <FormControl>
            {multiple ? (
              <Upload
                multiple
                accept={{ 'image/*': [] }}
                files={field.value}
                error={!!error}
                {...other}
              />
            ) : (
              <Upload
                accept={{ 'image/*': [] }}
                file={field.value}
                error={!!error}
                {...other}
              />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

// ----------------------------------------------------------------------

interface Props extends Omit<UploadProps, 'file'> {
  name: string;
  multiple?: boolean;
  description?: string;
}

// ----------------------------------------------------------------------

export function RHFUploadAvatar({ name, description, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <FormControl>
            <div>
              <UploadAvatar error={!!error} file={field.value} {...other} />
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
