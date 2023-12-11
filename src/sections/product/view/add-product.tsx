'use client';
import { RHFInput, RHFSelect } from '@/components/hook-form';
import FormProvider from '@/components/hook-form/form-provider';
import RHFEditor from '@/components/hook-form/rhf-editor';
import RHFUpload from '@/components/hook-form/rhf-upload';
import { Button } from '@/components/ui/button';
import { SelectItem } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { postData } from '@/utils/post-data';
import { postFormData } from '@/utils/post-form-data';
import { yupResolver } from '@hookform/resolvers/yup';
import isEmpty from 'lodash/isEmpty';
import { Loader2 } from 'lucide-react';
import { Session } from 'next-auth';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import slugify from 'slugify';
import * as yup from 'yup';

interface Props {
  session: Session;
  categories: any;
}

type FormValueProp = {
  name: string;
  desc: string;
  slug: string;
  address: string;
  price: number;
  displayPrice: string;
  category: string;
  image: File | string | null;
  previews: (File | string)[] | null;
};

const defaultValues = {
  name: '',
  desc: '',
  slug: '',
  address: '',
  price: 0,
  displayPrice: '',
  category: '',
  image: '',
  previews: [],
};

const formSchema = yup.object({
  name: yup.string().required('Name is required!'),
  desc: yup.string(),
  location: yup.string(),
  slug: yup.string(),
  price: yup.number(),
  address: yup.string(),
  displayPrice: yup.string(),
  category: yup.string(),
  image: yup
    .mixed()
    .transform((v) => (!v ? undefined : v))
    .required('Image is required'),
  previews: yup
    .mixed()
    .transform((v) => (isEmpty(v) ? undefined : v))
    .required('Previews is required'),
});

export function AddProduct({ session, categories }: Props) {
  const { toast } = useToast();

  const methods = useForm<FormValueProp>({
    resolver: yupResolver(formSchema) as any,
    defaultValues,
  });

  const {
    handleSubmit,
    setValue,
    watch,
    setError,
    formState: { isSubmitting, errors },
  } = methods;

  const values = watch();

  const onSubmit = async (values: FormValueProp) => {
    try {
      const slug = values?.slug || slugify(values?.name.toLowerCase() || '');
      // image
      const formData = new FormData();
      formData.append('files', values.image!);
      // previews
      const formDataPreviews = new FormData();
      values.previews?.length! > 0 &&
        values.previews?.forEach((value: string | Blob) => {
          formDataPreviews.append('files', value);
        });

      const [resRemoteImage, resRemotePreviews] = await Promise.all([
        postFormData({
          url: 'upload',
          body: formData,
          token: session?.user?.accessToken,
        }),
        postFormData({
          url: 'upload',
          body: formDataPreviews,
          token: session?.user?.accessToken,
        }),
      ]);

      await postData({
        url: 'products',
        body: JSON.stringify({
          data: {
            ...values,
            slug,
            author: session?.user?.id,
            image: resRemoteImage?.[0]?.id || null,
            previews: resRemotePreviews?.map((item: { id: any }) => item.id),
          },
        }),
        token: session?.user?.accessToken,
      });

      toast({
        title: 'Add product successfully!',
      });
    } catch (error: any) {
      if (error?.message) {
        let errorMessage = JSON.parse(error?.message || '');
        errorMessage = errorMessage?.error?.details?.errors?.[0];

        if (errorMessage) {
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: `${errorMessage?.path}: ${errorMessage?.message}`,
          });
        }
      }
      setError('root', {
        message: 'Some thing went wrong!',
      });
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('image', newFile as any, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleRemoveFile = useCallback(() => {
    setValue('image', null);
  }, [setValue]);

  const handleDropFiles = useCallback(
    (acceptedFiles: File[]) => {
      const files = values.previews || [];

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setValue('previews', [...files, ...newFiles], { shouldValidate: true });
    },
    [setValue, values.previews]
  );

  const handleRemoveFiles = useCallback(
    (inputFile: File | string) => {
      const filtered =
        values.previews &&
        values.previews?.filter((file: any) => file !== inputFile);
      setValue('previews', filtered);
    },
    [setValue, values.previews]
  );

  const handleRemoveAllFiles = useCallback(() => {
    setValue('previews', []);
  }, [setValue]);

  return (
    <div className="container">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-primary text-[36px] font-light mb-[10px]">
          Add Product
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              Descriptions
            </label>
            <RHFInput
              name="desc"
              inputStyle="underline"
              placeholder="Your description"
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Category
            </label>
            <RHFSelect name="category" placeholder="Category">
              {categories?.map((category: any) => {
                const attributes = category?.attributes;

                return (
                  <SelectItem key={category?.id} value={category?.id}>
                    {attributes?.name}
                  </SelectItem>
                );
              })}
            </RHFSelect>
          </div>
          <div className="flex flex-col gap-2">
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Price
            </label>
            <RHFInput
              type="number"
              name="price"
              inputStyle="underline"
              placeholder="Your price"
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Display Price
            </label>
            <RHFInput
              name="displayPrice"
              inputStyle="underline"
              placeholder="Your display price"
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Address
            </label>
            <RHFInput
              name="address"
              inputStyle="underline"
              placeholder="Your address"
              className="w-full"
            />
          </div>
          {/* <div className="flex flex-col gap-2">
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Slug
            </label>
            <RHFInput
              name="slug"
              inputStyle="underline"
              placeholder={slugify(values?.name || '')}
              className="w-full"
            />
          </div> */}
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-4">
          <div className="flex flex-col gap-2">
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Image
            </label>
            <RHFUpload
              name="image"
              maxSize={3145728}
              onDrop={handleDrop}
              onDelete={handleRemoveFile}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="opacity-70 text-[10px] uppercase font-bold">
              previews
            </label>
            <RHFUpload
              multiple
              thumbnail
              name="previews"
              maxSize={3145728}
              onDrop={handleDropFiles}
              onRemove={handleRemoveFiles}
              onRemoveAll={handleRemoveAllFiles}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <label className="opacity-70 text-[10px] uppercase font-bold">
            previews
          </label>
          <RHFEditor simple name="content" />
        </div>
        <div className="text-red-500 w-full text-center">
          {errors.root?.message || ''}
        </div>
        <div className="flex justify-end">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-full md:w-auto rounded-full mt-4"
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save changes
          </Button>
        </div>
      </FormProvider>
    </div>
  );
}
