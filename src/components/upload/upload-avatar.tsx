import { useDropzone } from 'react-dropzone';

import { UploadProps } from './types';
import RejectionFiles from './errors-rejection-files';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Camera } from 'lucide-react';

// ----------------------------------------------------------------------

export default function UploadAvatar({
  error,
  file,
  disabled,
  ...other
}: UploadProps) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    multiple: false,
    disabled,
    accept: {
      'image/*': [],
    },
    ...other,
  });

  const hasFile = !!file;

  const hasError = isDragReject || !!error;

  const imgUrl = typeof file === 'string' ? file : file?.preview;

  const renderPreview = hasFile && (
    <Image
      alt="avatar"
      src={imgUrl!}
      className="w-full h-full rounded-full"
      fill
    />
  );

  const renderPlaceholder = (
    <div
      className={cn(
        'upload-placeholder flex flex-col items-center justify-center gap-2 top-0 left-0 w-full h-full z-10 rounded-full absolute text-foreground transition-opacity duration-300 hover:opacity-75',
        hasError && 'text-red-500 border-red-500 bg-red-500/10',
        hasFile && 'z-10 opacity-0 text-white bg-gray-500/60'
      )}
    >
      <Camera className="w-8 h-8" />

      <div>{file ? 'Update photo' : 'Upload photo'}</div>
    </div>
  );

  const renderContent = (
    <div className="w-full h-full overflow-hidden rounded-full relative">
      {renderPreview}
      {renderPlaceholder}
    </div>
  );

  return (
    <>
      <div
        {...getRootProps()}
        className={cn(
          'p-2 m-auto w-[144px] h-[144px] cursor-pointer overflow-hidden rounded-full border border-dashed border-gray-500/20',
          isDragActive && 'opacity-75',
          disabled && 'opacity-50 pointer-events-none',
          hasError && 'text-red-500 border-red-500 bg-red-500/10',
          hasFile && hasError && 'hover:[&>.upload-placeholder]:opacity-100'
        )}
      >
        <input {...getInputProps()} />

        {renderContent}
      </div>

      <RejectionFiles fileRejections={fileRejections} />
    </>
  );
}
