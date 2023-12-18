import { Button } from '@/components/ui/button';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import About from '../components/about';
import Address from '../components/address';
import Booking from '../components/booking/booking';
import { BookingDialog } from '../components/booking/booking-dialog';
import Breadcrumb from '../components/breadcrumb';
import Features from '../components/features';
import Heading from '../components/heading';
import ImageSlide from '../components/image-silde';
import OpeningHours from '../components/opening-hours';
import ReviewWriting from '../components/review-writing/review-writing';
import Review from '../components/review/review';
import ShareThisListing from '../components/share-listing';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import SEO from '@/utils/seo'

interface IProps {
  slug: string;
}

const ProductDetail = async ({ slug }: IProps) => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  const { data: product } = await fetchDataRest(`products/slug/${slug}`);

  return (
    <div>
      <SEO
        title={product?.attributes?.name}
        description={product?.attributes?.description}
        keywords={product?.attributes?.name}
      />

      <Breadcrumb />
      <Heading product={product?.attributes || {}} />
      <ImageSlide product={product?.attributes || {}} />
      <div className="container lg:grid lg:grid-cols-12  gap-[30px]">
        <div className="lg:col-span-7">
          <About content={product?.attributes?.content || ''} />
          <Features />
          <Review />
          {/* <ReviewWriting /> */}
        </div>
        <div className="lg:col-span-5 flex flex-col gap-[30px]">
          <Booking
            session={session!}
            productId={product?.id}
            className="hidden lg:block"
          />
          <Address
            author={product?.attributes?.author?.data || null}
          />
          <OpeningHours />
          <ShareThisListing />
        </div>
      </div>
      <div className="lg:hidden fixed bottom-0 w-full  border-t bg-white">
        <div className="w-full flex justify-between container py-4 items-center">
          <div>
            {product?.displayPrice}
          </div>
          <BookingDialog session={session!} productId={product?.id}>
            <Button className="rounded-full">Booking</Button>
          </BookingDialog>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
