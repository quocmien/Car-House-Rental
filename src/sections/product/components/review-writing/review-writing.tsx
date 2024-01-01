import { Session } from 'next-auth';
import ReviewForm from './review-form';

interface Props {
  productId?: number;
  session: Session;
}

const ReviewWriting = ({ productId, session }: Props) => {
  return (
    <section id="write-a-review" className="block-detail">
      <h2 className="text-[26px] text-primary font-light mb-5">
        Write a Review
      </h2>
      <div>
        <div className="flex flex-col shadow-md px-5 py-[30px] relative bg-[#fafafa]">
          <ReviewForm productId={productId} session={session} />
        </div>
      </div>
    </section>
  );
};

export default ReviewWriting;
