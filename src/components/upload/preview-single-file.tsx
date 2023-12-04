
// ----------------------------------------------------------------------

import Image from "next/image";

type Props = {
  imgUrl?: string;
};

export default function SingleFilePreview({ imgUrl = '' }: Props) {
  return (
    <div className="p-2 top-0 left-0 w-full h-full absolute">
      <Image
        alt="file preview"
        src={imgUrl}
        className="w-full h-full rounded"
        fill />
    </div>
  );
}
