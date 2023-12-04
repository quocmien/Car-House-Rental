import DownloadButton from './download-button';
import { fileData, fileThumb, fileFormat } from './utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// ----------------------------------------------------------------------

type FileIconProps = {
  file: File | string;
  tooltip?: boolean;
  imageView?: boolean;
  onDownload?: VoidFunction;
  className?: string;
  imgClassName?: string;
};

export default function FileThumbnail({
  file,
  tooltip,
  imageView,
  onDownload,
  className,
  imgClassName,
}: FileIconProps) {
  const { name = '', path = '', preview = '' } = fileData(file);

  const format = fileFormat(path || preview);

  const renderContent =
    format === 'image' && imageView ? (
      <Image
        src={preview}
        className={cn(
          'w-full h-full flex flex-shrink-0 object-cover',
          imgClassName
        )}
        fill
        alt="thumbnail"
      />
    ) : (
      <Image
        className={cn('flex flex-shrink-0', className)}
        width={32}
        height={32}
        src={fileThumb(format)}
        alt="thumbnail"
      />
    );

  if (tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <span className="flex flex-col flex-shrink-0 items-center justify-center w-fit">
              {renderContent}
              {onDownload && <DownloadButton onDownload={onDownload} />}
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <>
      {renderContent}
      {onDownload && <DownloadButton onDownload={onDownload} />}
    </>
  );
}
