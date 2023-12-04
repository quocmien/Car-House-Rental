import React from 'react';
import { UploadProps } from './types';
import { cn } from '@/lib/utils';
import { UploadIllustration } from '@/assets/illustrations';
import SingleFilePreview from './preview-single-file';
import { UploadCloud, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { Button } from '../ui/button';
import MultiFilePreview from './preview-multi-file';
import RejectionFiles from './errors-rejection-files';

const Upload = ({
  disabled,
  multiple = false,
  error,
  //
  file,
  onDelete,
  //
  files,
  thumbnail,
  onUpload,
  onRemove,
  onRemoveAll,
  className,
  ...other
}: UploadProps) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    multiple,
    disabled,
    ...other,
  });

  const hasFile = !!file && !multiple;

  const hasFiles = !!files && multiple && !!files.length;

  const hasError = isDragReject || !!error;

  const renderPlaceholder = (
    <div className="flex flex-col items-center justify-center flex-wrap space-y-6">
      <UploadIllustration className="w-full max-w-[200px]" />
      <div className="flex flex-col space-y-2 text-center">
        <h6>Drop or Select file</h6>
        <div className="text-gray-500/80">
          Drop files here or click
          <span className="mx-0.5 text-primary underline">browse</span>
          thorough your machine
        </div>
      </div>
    </div>
  );

  const renderSinglePreview = (
    <SingleFilePreview
      imgUrl={typeof file === 'string' ? file : file?.preview}
    />
  );

  const removeSinglePreview = hasFile && onDelete && (
    <div
      onClick={onDelete}
      className="bg-slate-500 hover:bg-slate-400 absolute z-10 right-4 top-4 opacity-80 rounded-full p-1"
    >
      <X className="w-[18px] h-[18px] text-white" />
    </div>
  );

  const renderMultiPreview = hasFiles && (
    <>
      <div className="my-6">
        <MultiFilePreview
          files={files}
          thumbnail={thumbnail}
          onRemove={onRemove}
        />
      </div>

      <div className="flex justify-end space-x-6">
        {onRemoveAll && (
          <Button variant="outline" className='rounded-full' size="sm" onClick={onRemoveAll}>
            Remove All
          </Button>
        )}

        {onUpload && (
          <div className='flex items-center'>
            <UploadCloud className="w-6 h-6" />
            <Button size="sm" variant="ghost" onClick={onUpload}>
              Upload
            </Button>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className={cn('w-full relative', className)}>
      <div
        {...getRootProps()}
        className={cn(
          'p-10 outline-none rounded-[8px] cursor-pointer overflow-hidden relative bg-gray-500/10 border border-dashed border-gray-500/20 transition-all',
          "hover:opacity-75",
          isDragActive && "opacity-75",
          disabled && "opacity-50 pointer-events-none",
          hasError && "text-red-500 border-red-500 bg-red-500/10",
          hasFile && "py-[24%]"
        )}
      >
        <input {...getInputProps()} />
        {hasFile ? renderSinglePreview : renderPlaceholder}
      </div>

      {removeSinglePreview}

      <RejectionFiles fileRejections={fileRejections} />

      {renderMultiPreview}
    </div>
  );
};

export default Upload;
