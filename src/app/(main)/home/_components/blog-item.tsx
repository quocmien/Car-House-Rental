import { cn } from '@/lib/utils';
import { Clock, MoveRight } from 'lucide-react';

interface Props {
  name: string;
  date: string;
  desc: string;
  linkMore: string;
}

const BlogItem = ({ name, date, desc, linkMore }: Props) => {
  return (
    <div className="relative">
      <div className="flex flex-col space-y-3 mt-[10px]">
        <h4 className="text-sm font-bold text-primary">{name}</h4>
        <figure className="opacity-50 text-xs font-bold flex items-center">
          {date}
        </figure>
        <p className="text-sm">{desc}</p>
        <a href={linkMore} className="flex items-center">
          <MoveRight className="w-[14px] h-[14px] ml-1 text-primary" />
        </a>
      </div>
    </div>
  );
};

export default BlogItem;
