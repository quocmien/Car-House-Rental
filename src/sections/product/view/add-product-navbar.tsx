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
import { zodResolver } from '@hookform/resolvers/zod';
import { DialogProps } from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { signIn } from 'next-auth/react';
import { RHFSelect } from '@/components/hook-form/rhf-select';
import { LOCATIONS } from '@/mock/common';
import { SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface IProps {
  children: ReactNode;
}

const defaultValues = {
  name: '',
  description: '',
  location: '',
};

const formSchema = z.object({
  name: z
    .string({
      required_error: 'Email is required',
    }),
  description: z.string(),
  location: z.string(),
});

export function AddProductNavbar({ children, ...other }: IProps & DialogProps) {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { handleSubmit, setError } = methods;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <Dialog {...other}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>
              <span className="text-primary">Add Product</span>
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <label className="opacity-70 text-[10px] uppercase font-bold">
                Name<em className="text-red-500">*</em>
              </label>
              <RHFInput
                name="name"
                inputStyle="underline"
                placeholder="Your Name"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="opacity-70 text-[10px] uppercase font-bold">
                Description
              </label>
              <RHFInput
                name="description"
                inputStyle="underline"
                placeholder="Your description"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Location
            </label>
            <RHFSelect name="location">
              {LOCATIONS.map((location) => (
                <SelectItem key={location.value} value={location.value}>
                  {location.label}
                </SelectItem>
              ))}
            </RHFSelect>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full rounded-full">
              Save changes
            </Button>
          </DialogFooter>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
