'use client';
import { RHFDatePicker, RHFInput } from '@/components/hook-form';
import FormProvider from '@/components/hook-form/form-provider';
import RHFTextArea from '@/components/hook-form/rhf-text-area';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { fTimestamp } from '@/utils/format-time';
import { postData } from '@/utils/post-data';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader2 } from 'lucide-react';
import { Session } from 'next-auth';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface IProps {
  onSuccess?: () => void;
  session: Session;
  productId: string;
  links: Array<any> | [];
}

type FormValueProp = {
  name?: string | null;
  email?: string | null;
  first_date: string;
  last_date: string;
  guest?: number;
  note?: string;
};

const defaultValues = {
  name: '',
  email: '',
  first_date: '',
  last_date: '',
  guest: 1,
  note: '',
};

const formSchema = yup.object({
  name: yup.string().nullable(),
  email: yup.string().email('Email is invalid!').nullable(),
  first_date: yup.string().required('First Date is required!'),
  last_date: yup.string().required('Last Date is required!'),
  guest: yup.number(),
  note: yup.string(),
});

const BookingForm = ({ session, onSuccess, productId, links }: IProps) => {
  const { toast } = useToast();

  const methods = useForm<FormValueProp>({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    setError,
    watch,
    formState: { isDirty, isSubmitting, errors },
  } = methods;

  const watcher = watch();

  const onSubmit = async (values: FormValueProp) => {
    try {
      await postData({
        url: 'bookings',
        body: JSON.stringify({
          data: {
            ...values,
            name: values.name || session?.user?.username,
            email: values.email || session?.user?.email,
            first_date: fTimestamp(values.first_date),
            last_date: fTimestamp(values.last_date),
            user: session?.user?.id,
            product: productId,
          },
        }),
        token: session?.user?.accessToken,
      });
      toast({
        title: 'Reserve successfully!',
      });
      !!onSuccess && onSuccess();
    } catch (error: any) {
      if (error?.message) {
        setError('root', {
          message: JSON.parse(error?.message)?.error?.message,
        });
        return;
      }
      setError('root', {
        message: 'Resever failed!',
      });
    }
  };
  return (
    <div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          {!session && (
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="opacity-70 text-[10px] uppercase font-bold">
                  Your name<em>*</em>
                </label>
                <RHFInput
                  name="name"
                  inputStyle="underline"
                  placeholder="Your name"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="opacity-70 text-[10px] uppercase font-bold">
                  Email<em>*</em>
                </label>
                <RHFInput
                  name="email"
                  inputStyle="underline"
                  placeholder="Your email"
                  className="w-full"
                />
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="opacity-70 text-[10px] uppercase font-bold">
                First date<em>*</em>
              </label>
              <RHFDatePicker
                name="first_date"
                placeholder="Pick firt date"
                className="w-full"
                fromDate={new Date()}
                toDate={(watcher.last_date as any) || undefined}
                datePickerProps={{
                  underline: true,
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="opacity-70 text-[10px] uppercase font-bold">
                Last date<em>*</em>
              </label>
              <RHFDatePicker
                name="last_date"
                placeholder="Pick last date"
                className="w-full"
                fromDate={(watcher.first_date as any) || new Date()}
                datePickerProps={{
                  underline: true,
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Guests
            </label>
            <RHFInput
              name="guest"
              type='number'
              inputStyle="underline"
              placeholder="Guests"
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Note
            </label>
            <RHFTextArea
              name="note"
              inputStyle="underline"
              placeholder="Your note"
              className="w-full"
            />
          </div>
          <div className="text-red-500 w-full text-center">
            {errors.root?.message || ''}
          </div>
          <Button
            disabled={!isDirty || isSubmitting}
            type="submit"
            className="w-full md:w-auto rounded-full mt-4"
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Reserve
          </Button>


          {
            links.map((link: any, index: number) => {
              return (
              <Button
                key={index}
                className="w-full md:w-auto rounded-full mt-1"
              >
                <a className='w-full block' href={link.link || '#'} target='_blank'>
                  { link.label }
                </a>
              </Button>
    
              )
            })
          }
        </div>
      </FormProvider>
    </div>
  );
};

export default BookingForm;
