import Image from 'next/image';
import StarRating from '@/components/star-rating';
import { fDate } from '@/utils/format-time';

const ReviewItem = ({ rating }: any) => {
  const avatar =
    rating?.user_rating?.data?.attributes?.avatar?.data?.attributes?.url;

  return (
    <div className="flex">
      <div className="rounded-full shadow-md w-[80px] h-[80px]">
        <div
          className="rounded-full h-full overflow-hidden -z-10 w-full bg-contain bg-no-repeat"
          // style={{ backgroundImage: "url('/img/person-01.jpg')" }}
        >
          <Image
            className="object-cover bg-center h-full w-full"
            src={avatar || '/img/person-01.jpg'}
            width={80}
            height={80}
            alt=""
          />
        </div>
      </div>
      <div className="flex-1 ml-5">
        <div className="flex space-x-5">
          <div className="flex items-center">
            <span className="mr-[5px]">
              <StarRating value={rating?.rating} />
            </span>
            {/* <span className="text-[11px] ">(6)</span> */}
          </div>
          <div className="text-xs opacity-60">
            {fDate(rating?.date_rating, 'MM.dd.yyyy')}
          </div>
        </div>
        <p className="text-sm my-[10px] opacity-60 leading-[18px]">
          {rating?.comment}
        </p>
      </div>
    </div>
  );
};

export default ReviewItem;
