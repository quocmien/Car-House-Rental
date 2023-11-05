import Image from 'next/image';
import StarRating from '@/components/star-rating';

const ReviewItem = () => {
  return (
    <div className="flex">
      <div className="rounded-full shadow-md w-[80px] h-[80px]">
        <div
          className="rounded-full h-full overflow-hidden -z-10 w-full opacity-30 bg-cover"
          style={{ backgroundImage: "url('/img/person-01.jpg')" }}
        >
          <Image
            className="object-cover h-full hidden"
            src="/img/person-01.jpg"
            fill
            alt=""
          />
        </div>
      </div>
      <div className="flex-1 ml-5">
        <div className="flex space-x-5">
          <div className="flex items-center">
            <span className="mr-[5px]">
              <StarRating value={4} />
            </span>
            <span className="text-[11px] ">(6)</span>
          </div>
          <div className="text-xs opacity-60">09.05.2016</div>
        </div>
        <p className="text-sm my-[10px] opacity-60 leading-[18px]">
          Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam
          sollicitudin, dapibus semper turpis
        </p>
      </div>
    </div>
  );
};

export default ReviewItem;
