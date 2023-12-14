'use client';
import { RHFInput } from '@/components/hook-form';
import FormProvider from '@/components/hook-form/form-provider';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ReturnTypeBoolean, useBoolean } from '@/hooks/use-boolean';
import { postData } from '@/utils/post-data';
import { yupResolver } from '@hookform/resolvers/yup';
import { DialogProps } from '@radix-ui/react-dialog';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface IProps {
  children: ReactNode;
}

type FormValueProp = {
  username: string;
  email: string;
  password: string;
};

const defaultValues = {
  username: '',
  email: '',
  password: '',
};

const formSchema = yup.object({
  username: yup.string().required('Username is required!'),
  email: yup.string().required('Username is required!').email('Email invalid!'),
  password: yup.string().required('Password is required!'),
});

export function Register({ children, ...other }: IProps & DialogProps) {
  const router = useRouter()
  const open = useBoolean(false);
  const methods = useForm<FormValueProp>({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const { handleSubmit, setError } = methods;

  const onSubmit = async (values: FormValueProp) => {
    try {
      await postData({
        url: 'auth/local/register',
        body: JSON.stringify(values),
      });
      const { ok, error }: any = await signIn('credentials', {
        identifier: values.username,
        password: values.password,
        redirect: false,
      });
      if (ok) {
        open.onFalse();
        router.refresh()
      } else {
        setError('password', {
          message: 'Login failed!',
        });
      }
    } catch (error: any) {
      if (error?.message) {
        setError('password', {
          message: JSON.parse(error?.message)?.error?.message,
        });
        return;
      }
      setError('password', {
        message: 'Login failed!',
      });
    }
  };

  return (
    <Dialog
      {...other}
      open={open.value}
      onOpenChange={(status) => (status ? open.onTrue() : open.onFalse())}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>
              <span className="text-primary">Register</span>
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <label className="opacity-70 text-[10px] uppercase font-bold">
                Username<em>*</em>
              </label>
              <RHFInput
                name="username"
                inputStyle="underline"
                placeholder="Username"
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
            <div className="flex flex-col gap-2">
              <label className="opacity-70 text-[10px] uppercase font-bold">
                Password<em>*</em>
              </label>
              <RHFInput
                type="password"
                name="password"
                inputStyle="underline"
                placeholder="Your password"
                className="w-full"
              />
            </div>
          </div>
          <DialogFooter>
            <button type="submit" className="w-full">
              Register
            </button>
          </DialogFooter>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
