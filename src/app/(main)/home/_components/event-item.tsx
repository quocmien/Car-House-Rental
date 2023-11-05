import { cn } from '@/lib/utils';
import { Clock, MoveRight } from 'lucide-react';

interface Props {
  name: string;
  time: string;
  day: string;
  month: string;
  desc: string;
  linkMore: string;
}

const EventItem = ({ name, time, desc, linkMore, day, month }: Props) => {
  return (
    <div className="relative pl-[70px]">
      <div
        className={cn(
          'absolute w-[50px] left-0 rounded-[3px] border-2 border-[#0000001a] text-center pt-[5px] pb-2 px-[3px]',
          'before:w-[37px] before:h-[6px] before:content-[""] before:absolute before:-top-[3px] before:left-1 before:bg-[url("/img/calendar-spring.png")]'
        )}
      >
        <div className="opacity-60 text-xl -mb-[3px]">{day}</div>
        <div className="uppercase opacity-60 text-xs">{month}</div>
      </div>
      <div className="flex flex-col space-y-3 mt-[10px]">
        <h4 className="text-sm font-bold text-primary">{name}</h4>
        <figure className="opacity-50 text-xs font-bold flex items-center">
          <Clock className="w-3 h-3 mr-2" />
          <span>{time}</span>
        </figure>
        <p className='text-sm'>{desc}</p>
        <a href={linkMore} className="flex items-center">
          <span className="uppercase text-foreground text-[10px]">More</span>
          <MoveRight className="w-[14px] h-[14px] ml-1 " />
        </a>
      </div>
    </div>
  );
};

export default EventItem;
