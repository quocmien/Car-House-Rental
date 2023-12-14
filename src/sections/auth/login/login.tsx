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
import { useBoolean } from '@/hooks/use-boolean';
import { zodResolver } from '@hookform/resolvers/zod';
import { DialogProps } from '@radix-ui/react-dialog';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

interface IProps {
  children: ReactNode;
}

const defaultValues = {
  identifier: '',
  password: '',
};

const formSchema = z.object({
  identifier: z
    .string({
      required_error: 'Identifier is required',
    }),
  password: z.string({
    required_error: 'Password is required',
  }),
});

export function Login({ children, ...other }: IProps & DialogProps) {
  const router = useRouter()
  const open = useBoolean(false);
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { handleSubmit, setError } = methods;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { ok, error }: any = await signIn('credentials', {
        identifier: values.identifier,
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
    } catch (error) {
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
              <span className="text-primary">Sign In</span>
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <label className="opacity-70 text-[10px] uppercase font-bold">
                Identifier<em className="text-red-500">*</em>
              </label>
              <RHFInput
                name="identifier"
                inputStyle="underline"
                placeholder="Identifier"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="opacity-70 text-[10px] uppercase font-bold">
                Password<em className="text-red-500">*</em>
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
              Login
            </button>
          </DialogFooter>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
