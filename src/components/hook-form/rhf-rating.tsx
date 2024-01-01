import { useFormContext } from 'react-hook-form';

import { Rating } from '@material-tailwind/react';
import { Star } from 'lucide-react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';

// ----------------------------------------------------------------------

type Props = {
  name: string;
  description?: string;
  count?: number;
};

const RatedIcon = () => (
  <Star
    strokeWidth={0.5}
    className="w-[14px] h-[14px] text-primary fill-primary opacity-100"
  />
);

const UnratedIcon = () => (
  <Star strokeWidth={0.5} className="w-[14px] h-[14px] fill-black opacity-10" />
);

export default function RHFRating({
  name,
  description,
  count,
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
            <Rating
              count={count || 10}
              value={field.value}
              onChange={field.onChange}
              ratedIcon={<RatedIcon />}
              unratedIcon={<UnratedIcon />}
              placeholder={''}
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
