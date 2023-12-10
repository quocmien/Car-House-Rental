'use client';
import FormProvider, { RHFInput, RHFSelect } from '@/components/hook-form';
import { Button } from '@/components/ui/button';
import { SelectItem } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { GENDERS } from '@/configs/global-configs';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import * as yup from 'yup';

interface IProps {
  userId: string | number;
}

type FormValueProp = {
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
  gender?: string;
  dob?: string;
};

const defaultValues = {
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  address: '',
  gender: '',
  dob: '',
};

const formSchema = yup.object({
  username: yup.string().required('Username is required!'),
  email: yup.string().required('Username is required!').email('Email invalid!'),
  firstName: yup.string(),
  lastName: yup.string(),
  phone: yup.string(),
  address: yup.string(),
  gender: yup.string(),
  dob: yup.string(),
});

const UserInforFormWithoutSession = ({ userId }: IProps) => {
  const { toast } = useToast();

  const { data } = useSWR(`user/${userId}`, () =>
    fetchDataRest(`users/${userId!}`)
  );

  const methods = useForm<FormValueProp>({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const { reset } = methods;

  useEffect(() => {
    if (!data) return;
    reset(data);
  }, [data]);

  return (
    <FormProvider methods={methods}>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Username
            </label>
            <RHFInput
              name="username"
              inputStyle="underline"
              placeholder="Your username"
              className="w-full"
              disabled
            />
          </div>
          <div>
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Email
            </label>
            <RHFInput
              name="email"
              inputStyle="underline"
              placeholder="Your email"
              className="w-full"
              disabled
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="opacity-70 text-[10px] uppercase font-bold">
              First Name
            </label>
            <RHFInput
              name="firstName"
              inputStyle="underline"
              placeholder="Your first name"
              className="w-full"
              disabled
            />
          </div>
          <div>
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Last Name
            </label>
            <RHFInput
              name="lastName"
              inputStyle="underline"
              placeholder="Your last name"
              className="w-full"
              disabled
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Phone Number
            </label>
            <RHFInput
              name="phone"
              inputStyle="underline"
              placeholder="Your phone number"
              className="w-full"
              disabled
            />
          </div>
          <div>
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Address
            </label>
            <RHFInput
              name="address"
              inputStyle="underline"
              placeholder="Your address"
              className="w-full"
              disabled
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Gender
            </label>
            <RHFSelect name="gender" placeholder="Gender" disabled>
              {GENDERS?.map((gender: any) => (
                <SelectItem key={gender} value={gender}>
                  {gender}
                </SelectItem>
              ))}
            </RHFSelect>
          </div>
          <div>
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Birthday
            </label>
            <RHFInput
              name="dob"
              inputStyle="underline"
              placeholder="YYYY/MM/dd"
              className="w-full"
              disabled
            />
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default UserInforFormWithoutSession;
