'use client';
import FormProvider, {
  RHFDatePicker,
  RHFInput,
  RHFSelect,
} from '@/components/hook-form';
import { RHFUploadAvatar } from '@/components/hook-form/rhf-upload';
import { Button } from '@/components/ui/button';
import { SelectItem } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { GENDERS } from '@/configs/global-configs';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import { getDirtyValues } from '@/utils/form';
import { fDate, fTimestamp } from '@/utils/format-time';
import { postData } from '@/utils/post-data';
import { postFormData } from '@/utils/post-form-data';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader2, MinusCircle, Plus } from 'lucide-react';
import { Session } from 'next-auth';
import { useCallback, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import useSWR from 'swr';
import * as yup from 'yup';

interface IProps {
  session: Session | null;
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
  avatar?: File | String | null;
  banner?: File | String | null;
  links: any | null;
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
  avatar: '',
  banner: '',
  links: [
    {
      label: '',
      link: '',
    },
  ],
};

const formSchema = yup.object({
  username: yup.string().required('Username is required!'),
  email: yup.string().required('Username is required!').email('Email invalid!'),
  firstName: yup.string().nullable(),
  lastName: yup.string().nullable(),
  phone: yup.string().nullable(),
  address: yup.string().nullable(),
  gender: yup.string().nullable(),
  avatar: yup.mixed().nullable(),
  dob: yup.string().nullable(),
  links: yup.mixed().nullable(),
});

const UserInforForm = ({ session }: IProps) => {
  const { toast } = useToast();

  const { data } = useSWR(`user/${session?.user?.id}`, () =>
    fetchDataRest(
      `users/${session?.user?.id!}?populate=*`,
      session?.user?.accessToken!
    )
  );

  const methods = useForm<FormValueProp>({
    resolver: yupResolver(formSchema as any),
    defaultValues,
  });

  const {
    control,
    reset,
    handleSubmit,
    setError,
    formState: { dirtyFields, errors, isDirty, isSubmitting },
    setValue,
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'links',
  });

  const handleAddLink = () => {
    append({
      label: '',
      link: '',
    });
  };

  const handleRemoveLinks = (index: number) => {
    remove(index);
  };

  useEffect(() => {
    if (!data) return;
    reset({ ...data, avatar: data?.avatar?.url });
  }, [data]);

  const onSubmit = async (values: FormValueProp) => {
    const changedValue = getDirtyValues(dirtyFields as any, values);
    console.log({ changedValue });

    if (changedValue?.role) {
      changedValue.role = undefined;
    }

    try {
      // image
      if (changedValue.avatar) {
        const formData = new FormData();
        formData.append('files', changedValue.avatar!);

        const resRemoteImage = await postFormData({
          url: 'upload',
          body: formData,
          token: session?.user?.accessToken,
        });

        changedValue.avatar = resRemoteImage?.[0]?.id || null;
      }

      if (changedValue.dob) {
        changedValue.dob = fDate(changedValue.dob, 'yyyy-MM-dd');
      }

      await postData({
        url: `users/${session?.user?.id}`,
        method: 'put',
        body: JSON.stringify(changedValue),
        token: session?.user?.accessToken,
      });
      toast({
        title: 'Save changes successfully!',
      });
    } catch (error) {
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
        setValue('avatar', newFile as any, {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    },
    [setValue]
  );

  const handleRemoveFile = useCallback(() => {
    setValue('avatar', null, { shouldValidate: true, shouldDirty: true });
  }, [setValue]);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="avatar w-full mt-[30px] mb-[20px]">
            <RHFUploadAvatar
              name="avatar"
              maxSize={3145728}
              onDrop={handleDrop}
              onDelete={handleRemoveFile}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="opacity-70 text-[10px] uppercase font-bold">
              First Name
            </label>
            <RHFInput
              name="firstName"
              inputStyle="underline"
              placeholder="Your first name"
              className="w-full"
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
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Phone Number
            </label>
            <RHFInput
              name="phone"
              inputStyle="underline"
              placeholder="Your phone number"
              className="w-full"
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
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Gender
            </label>
            <RHFSelect name="gender" placeholder="Gender">
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
            <RHFDatePicker
              name="dob"
              placeholder="Pick date"
              className="w-full"
              inputFormat="yyyy-MM-dd"
              captionLayout="dropdown-buttons"
              fromYear={1900}
              toYear={new Date().getFullYear()}
              datePickerProps={{
                underline: true,
              }}
            />
          </div>
          <div>
            <label className="opacity-70 text-[10px] uppercase font-bold">
              Links
            </label>
            <div>
              {fields.map((item, index) => (
                <div
                  className="w-full flex items-center gap-2 mb-2"
                  key={item.id}
                >
                  <div className="flex-1">
                    <RHFInput
                      name={`links[${index}].label`}
                      placeholder="Label"
                      inputStyle="underline"
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <RHFInput
                      name={`links[${index}].link`}
                      placeholder="Links"
                      inputStyle="underline"
                      className="w-full"
                    />
                  </div>

                  {index > 0 && (
                    <MinusCircle
                      className="w-5 h-5 mx-2 cursor-pointer"
                      onClick={() => handleRemoveLinks(index)}
                    />
                  )}
                </div>
              ))}
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={handleAddLink}
            >
              <Plus className="w-4 h-4 mr-1" /> Add item
            </div>
          </div>
        </div>
        <div className="text-red-500 w-full text-center">
          {errors.root?.message || ''}
        </div>
        <div className="flex justify-center">
          <Button
            disabled={!isDirty || isSubmitting}
            type="submit"
            className="w-full md:w-auto rounded-full mt-4"
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save changes
          </Button>
        </div>
      </div>
    </FormProvider>
  );
};

export default UserInforForm;
