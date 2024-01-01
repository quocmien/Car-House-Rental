import fetchData from '@/lib/fetch-data';
import ReviewItem from './review-item';
import { RATINGS } from '@/graphql/ratings';

interface Props {
  slug: string;
}

const Review = async ({ slug }: Props) => {
  const { data: ratingData } = await fetchData(RATINGS, {
    filters: {
      product: {
        slug: {
          eq: slug,
        },
      },
    },
    pagination: {
      pageSize: 3,
    },
    sort: ['date_rating:DESC'],
  });

  const ratingList = ratingData?.ratings?.data || [];

  return (
    <section className="block-detail">
      <h2 className="text-[26px] text-primary font-light mb-5">Reviews</h2>
      <div className="flex flex-col gap-[20px]">
        {ratingList?.map((rating: any) => {
          const ratingAttribute = rating?.attributes;
          return <ReviewItem key={rating?.id} rating={ratingAttribute} />;
        })}
      </div>
    </section>
  );
};

export default Review;
