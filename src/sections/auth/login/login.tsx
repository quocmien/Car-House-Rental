'use client';
import { RHFInput } from '@/components/hook-form';
import FormProvider from '@/components/hook-form/form-provider';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { DialogProps } from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

interface IProps {
  children: ReactNode;
}

const defaultValues = {
  email: '',
  password: '',
};

const formSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Email invalid!'),
  password: z.string({
    required_error: 'Password is required',
  }),
});

export function Login({ children, ...other }: IProps & DialogProps) {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <Dialog {...other}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Sign In</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <label className="opacity-70 text-[10px] uppercase font-bold">
                Email<em>*</em>
              </label>
              <RHFInput
                name="email"
                inputStyle="input-underline"
                placeholder="Your email"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="opacity-70 text-[10px] uppercase font-bold">
                Password<em>*</em>
              </label>
              <RHFInput
                type='password'
                name="password"
                inputStyle="input-underline"
                placeholder="Your password"
                className="w-full"
              />
            </div>
          </div>
          <DialogFooter>
            <button type="submit" className="w-full">
              Save changes
            </button>
          </DialogFooter>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
