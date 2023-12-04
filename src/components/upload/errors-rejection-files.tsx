import { FileRejection } from 'react-dropzone';

import { fData } from '@/utils/format-number';

import { fileData } from '../file-thumbnail';

// ----------------------------------------------------------------------

type Props = {
  fileRejections: FileRejection[];
};

export default function RejectionFiles({ fileRejections }: Props) {
  if (!fileRejections.length) {
    return null;
  }

  return (
    <div className="py-2 px-4 mt-6 text-left border border-dashed border-red-500 bg-red-500/80">
      {fileRejections.map(({ file, errors }) => {
        const { path, size } = fileData(file);

        return (
          <div key={path} className='my-2'>
            <div className='text-xs flex flex-nowrap'>
              {path} - {size ? fData(size) : ''}
            </div>

            {errors.map((error) => (
              <span
                className='text-xs'
                key={error.code}
              >
                - {error.message}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}
