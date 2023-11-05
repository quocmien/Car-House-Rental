import React from 'react';

const OpeningHours = () => {
  return (
    <section className="block-detail">
      <h2 className="text-[26px] text-primary font-light mb-5">
        Opening Hours
      </h2>
      <div className="flex flex-col gap-1 text-sm">
        <div className="flex justify-between">
          <div className="font-bold">Monday</div>
          <div>08:00am - 11:00pm</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Tuesday</div>
          <div>08:00am - 11:00pm</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Wednesday</div>
          <div>08:00am - 11:00pm</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Thursday</div>
          <div>08:00am - 11:00pm</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Friday day</div>
          <div>08:00am - 11:00pm</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Saturday</div>
          <div>08:00am - 11:00pm</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Sunday</div>
          <div>Closed</div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
