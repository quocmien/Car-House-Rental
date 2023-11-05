import { EVENT_LIST } from '@/mock/common';
import EventItem from './event-item';

const EventNearYou = () => {
  return (
    <section className="block-section bg-[#0000000d] !pb-[60px]">
      <div className="container">
        <div className="mt-[15px] mb-[50px]">
          <h2 className="text-primary opacity-80 text-[36px] font-light ">
            Events Near You
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {EVENT_LIST.map((event, idx) => (
            <EventItem
              key={idx}
              name={event.name}
              time={event.time}
              day={event.day}
              month={event.month}
              desc={event.desc}
              linkMore={event.linkMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventNearYou;
