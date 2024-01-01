'use client';
import FormProvider, { RHFInput, RHFTextArea } from '@/components/hook-form';
import RHFRating from '@/components/hook-form/rhf-rating';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { fTimestamp } from '@/utils/format-time';
import { postData } from '@/utils/post-data';
import { yupResolver } from '@hookform/resolvers/yup';
import { Session } from 'next-auth';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type FormValueProp = {
  title: string;
  message: string;
  rating?: number;
};

const defaultValues = {
  title: '',
  message: '',
  rating: 0,
};

const formSchema = yup.object({
  title: yup.string().required('Title is required!'),
  message: yup.string().required('Message is required!'),
  rating: yup.number().min(1, 'Rating must be greater than or equal 1'),
});

interface Props {
  productId?: number;
  session: Session;
}

const ReviewForm = ({ productId, session }: Props) => {
  const { toast } = useToast();

  const methods = useForm<FormValueProp>({
    resolver: yupResolver(formSchema as any),
    defaultValues,
  });

  const {
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = async (values: FormValueProp) => {
    try {
      await postData({
        url: 'ratings',
        body: JSON.stringify({
          data: {
            ...values,
            comment: values.message,
            product: productId,
            user_rating: session?.user?.id,
            date_rating: fTimestamp(new Date()),
          },
        }),
        token: session?.user?.accessToken,
      });
      toast({
        title: 'Review successfully!',
      });
      reset(defaultValues);
    } catch (error: any) {
      if (error?.message) {
        setError('root', {
          message: JSON.parse(error?.message)?.error?.message,
        });
        return;
      }
      setError('root', {
        message: 'Review failed!',
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[20px]">
        <h4 className="text-sm font-bold">Review your experience</h4>
        <div>
          <label className="opacity-70 text-[10px] uppercase font-bold">
            Rating<em>*</em>
          </label>
          <RHFRating name="rating" count={5} />
        </div>
        <div>
          <label className="opacity-70 text-[10px] uppercase font-bold">
            Title of your review<em>*</em>
          </label>
          <RHFInput
            name="title"
            inputStyle="underline"
            placeholder="Beautiful place!"
            className="w-full"
          />
        </div>
        <div>
          <label className="opacity-70 text-[10px] uppercase font-bold">
            Your Message<em>*</em>
          </label>
          <RHFTextArea
            rows={8}
            name="message"
            inputStyle="underline"
            placeholder="Describe your experience"
            className="w-full"
          />
        </div>

        {/* Rating */}
        {/* <div className="flex flex-col gap-[20px] sm:col-span-4">
          <h4 className="text-sm font-bold">Rating</h4>
          <div>
            <div className="text-sm">Comfort</div>
            <RHFRating name="comfort" />
          </div>
          <div>
            <div className="text-sm">Location</div>
            <RHFRating name="location" />
          </div>
          <div>
            <div className="text-sm">Facilities</div>
            <RHFRating name="facilities" />
          </div>
          <div>
            <div className="text-sm">Staff</div>
            <RHFRating name="staff" />
          </div>
          <div>
            <div className="text-sm">Value for money</div>
            <RHFRating name="valueForMoney" />
          </div>
        </div> */}
      </div>
      <div className="text-red-500 w-full text-center">
        {errors.root?.message || ''}
      </div>
      <div className="mt-[20px]">
        <Button
          type="submit"
          className="rounded-full font-bold p-0 px-[13px] w-auto h-[48px]"
        >
          <div className="md:block text-xs uppercase">Send review</div>
        </Button>
      </div>
    </FormProvider>
  );
};

export default ReviewForm;
