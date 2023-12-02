import ReviewItem from './review-item';

const Review = () => {
  return (
    <section className="block-detail">
      <h2 className="text-[26px] text-primary font-light mb-5">Reviews</h2>
      <div className='flex flex-col gap-[20px]'>
        <ReviewItem />
        <ReviewItem />
      </div>
    </section>
  );
};

export default Review;
