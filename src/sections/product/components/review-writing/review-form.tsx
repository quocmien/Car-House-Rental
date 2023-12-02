'use client';
import { InputUnderline } from '@/components/ui/input-underline';
import { TextareaUnderline } from '@/components/ui/textarea-underline';
import { Rating } from '@material-tailwind/react';
import { Star } from 'lucide-react';

const RatedIcon = () => (
  <Star
    strokeWidth={0.5}
    className="w-[14px] h-[14px] text-primary fill-primary opacity-100"
  />
);

const UnratedIcon = () => (
  <Star strokeWidth={0.5} className="w-[14px] h-[14px] fill-black opacity-10" />
);

const ReviewForm = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h4 className="text-sm font-bold">Review your experience</h4>
      <div>
        <label className="opacity-70 text-[10px] uppercase font-bold">
          Title of your review<em>*</em>
        </label>
        <InputUnderline placeholder="Beautiful place!" className="w-full" />
      </div>
      <div>
        <label className="opacity-70 text-[10px] uppercase font-bold">
          Your Message<em>*</em>
        </label>
        <TextareaUnderline
          rows={4}
          placeholder="Describe your experience"
          className="w-full"
        />
      </div>
      <h4 className="text-sm font-bold">Rating</h4>
      <div>
        <div className="text-sm">Comfort</div>
        <Rating
          count={10}
          value={0}
          ratedIcon={<RatedIcon />}
          unratedIcon={<UnratedIcon />}
        />
      </div>
      <div>
        <div className="text-sm">Location</div>
        <Rating
          count={10}
          value={0}
          ratedIcon={<RatedIcon />}
          unratedIcon={<UnratedIcon />}
        />
      </div>
      <div>
        <div className="text-sm">Facilities</div>
        <Rating
          count={10}
          value={0}
          ratedIcon={<RatedIcon />}
          unratedIcon={<UnratedIcon />}
        />
      </div>
      <div>
        <div className="text-sm">Staff</div>
        <Rating
          count={10}
          value={0}
          ratedIcon={<RatedIcon />}
          unratedIcon={<UnratedIcon />}
        />
      </div>
      <div>
        <div className="text-sm">Value for money</div>
        <Rating
          count={10}
          value={0}
          ratedIcon={<RatedIcon />}
          unratedIcon={<UnratedIcon />}
        />
      </div>
    </div>
  );
};

export default ReviewForm;
