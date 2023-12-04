import { fData } from '@/utils/format-number';

import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import FileThumbnail, { fileData } from '../file-thumbnail';
import { UploadProps } from './types';

// ----------------------------------------------------------------------

export default function MultiFilePreview({
  thumbnail,
  files,
  onRemove,
  className,
}: UploadProps) {
  return (
    <div>
      {files?.map((file) => {
        const { key, name = '', size = 0 } = fileData(file);

        const isNotFormatFile = typeof file === 'string';

        if (thumbnail) {
          return (
            <div
              className={cn(
                className,
                'inline-flex flex-col items-center justify-center m-1 w-[80px] h-[80px] rounded-[1.25px] overflow-hidden relative border border-gray-500/20 '
              )}
              key={key}
            >
              <FileThumbnail
                className="absolute"
                imgClassName="absolute"
                tooltip
                imageView
                file={file}
              />

              {onRemove && (
                <div
                  className="p-1 top-1 right-1 absolute text-white bg-slate-500 hover:bg-slate-400 opacity-80 rounded-full"
                  onClick={() => onRemove(file)}
                >
                  <X className="w-[14px] h-[14px] text-white" />
                </div>
              )}
            </div>
          );
        }

        return (
          <div
            className={cn(
              'flex items-center space-x-4 my-2 py-2 px-3 rounded border border-gray-500/20',
              className
            )}
            key={key}
          >
            <FileThumbnail file={file} />
            <div>
              <div>{isNotFormatFile ? file : name}</div>
              <div className='text-xs'>{isNotFormatFile ? '' : fData(size)}</div>
            </div>

            {onRemove && (
              <div onClick={() => onRemove(file)}>
                <X className="w-4 h-4" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
