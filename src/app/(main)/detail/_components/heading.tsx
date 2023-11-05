import StarRating from '@/components/star-rating';
import { Star } from 'lucide-react';

const Heading = () => {
  return (
    <section className="container flex flex-col sm:flex-row sm:justify-between">
      <div className="flex-1">
        <h1 className="text-primary opacity-80 text-[36px] font-light mt-[5px]">
          Marky’s Restaurant
        </h1>
        <h3 className="opacity-60 text-[18px] mb-[25px]">63 Birch Street</h3>
        <div className="flex items-center">
          <span className="mr-[5px]">
            <StarRating value={4} />
          </span>
          <span className="text-[11px] ">(6)</span>
        </div>
      </div>
      <div className="flex justify-end sm:block">
        <a className="w-auto border-2 rounded-full font-bold px-3 py-[6px] hover:bg-transparent hover:border-[#0000004d] flex items-center cursor-pointer">
          <Star
            strokeWidth={0.5}
            className="fill-primary text-primary w-3 h-3"
          />
          <span className="text-xs uppercase ml-2 text-primary">
            Write a review
          </span>
        </a>
      </div>
    </section>
  );
};

export default Heading;
