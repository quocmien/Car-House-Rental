import { DownloadIcon } from 'lucide-react';

// ----------------------------------------------------------------------

type Props = {
  onDownload?: VoidFunction;
};

export default function DownloadButton({ onDownload }: Props) {

  return (
    <div
      className="flex p-0 top-0 right-0 w-full h-full z-10 opacity-0 absolute rounded-none justify-center bg-slate-400 text-white transition-opacity hover:opacity-100"
      onClick={onDownload}
    >
      <DownloadIcon className="w-6 h-6" />
    </div>
  );
}
