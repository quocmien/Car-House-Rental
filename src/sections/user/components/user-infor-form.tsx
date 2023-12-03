'use client';
import FormProvider, { RHFInput } from '@/components/hook-form';
import { Button } from '@/components/ui/button';
import { TextareaUnderline } from '@/components/ui/textarea-underline';
import { zodResolver } from '@hookform/resolvers/zod';
import { Session } from 'next-auth';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import useSWR from 'swr';

interface IProps {
  session: Session | null;
}

const defaultValues = {
  email: '',
  username: '',
};

const formSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Email invalid!'),
  username: z.string({
    required_error: 'Username is required',
  }),
});

const UserInforForm = ({ session }: IProps) => {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { reset } = methods;

  useEffect(() => {
    if (!session) return;
    reset(session?.user as any);
  }, [session]);

  return (
    <FormProvider methods={methods}>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Username
            </label>
            <RHFInput
              name="username"
              inputStyle="input-underline"
              placeholder="Your username"
              className="w-full"
            />
          </div>
          <div className="">
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Email
            </label>
            <RHFInput
              name="email"
              inputStyle="input-underline"
              placeholder="Your email"
              className="w-full"
            />
          </div>
        </div>
        <div className="">
          <label className="opacity-70 text-[10px] uppercase font-bold">
            About you
          </label>
          <TextareaUnderline
            name="email"
            placeholder="Your email"
            className="w-full"
          />
        </div>
        <div className="flex justify-center">
          <Button type="submit" className="rounded-full">
            Save Changes
          </Button>
        </div>
      </div>
    </FormProvider>
  );
};

export default UserInforForm;
