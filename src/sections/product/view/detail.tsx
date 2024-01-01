import { Button } from '@/components/ui/button';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import { PRODUCT_DETAIL_QUERY } from '@/graphql/products';
import fetchData from '@/lib/fetch-data';
import Breadcrumb from '@/sections/product/components/breadcrumb';
import { getServerSession } from 'next-auth';
import About from '../components/about';
import Address from '../components/address';
import Booking from '../components/booking/booking';
import { BookingDialog } from '../components/booking/booking-dialog';
import Features from '../components/features';
import GalleryProduct from '../components/gallery-product';
import Heading from '../components/heading';
import ReviewWriting from '../components/review-writing/review-writing';
import Review from '../components/review/review';
import ShareThisListing from '../components/share-listing';

interface IProps {
  slug: string;
}

const ProductDetail = async ({ slug }: IProps) => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  const [{ data: products }] = await Promise.all([
    fetchData(PRODUCT_DETAIL_QUERY, {
      filters: {
        slug: {
          eq: slug,
        },
      },
    }),

  ]);

  const product = products?.products?.data[0];

  return (
    <div>
      <Breadcrumb
        menu={[
          {
            link: '/products',
            name: 'Products',
          },
        ]}
        title={product?.attributes?.name}
      />
      <Heading product={product?.attributes || {}} session={session} />
      <GalleryProduct product={product?.attributes || {}} />
      <div className="container lg:grid lg:grid-cols-12 gap-[30px] mt-[15px]">
        <div className="lg:col-span-7">
          <About content={product?.attributes?.content || ''} />
          <Features variants={product?.attributes?.variants || []} />
          <Review slug={slug} />
          {session && (
            <ReviewWriting productId={product?.id} session={session} />
          )}
        </div>
        <div className="lg:col-span-5 flex flex-col gap-[30px]">
          <Address author={product?.attributes?.author?.data || null} />
          <Booking
            session={session!}
            productId={product?.id}
            className="hidden lg:block"
          />
          <ShareThisListing />
        </div>
      </div>
      <div className="lg:hidden fixed bottom-0 w-full  border-t bg-white">
        <div className="w-full flex justify-between container py-4 items-center">
          <div>{product?.displayPrice}</div>
          <BookingDialog session={session!} productId={product?.id}>
            <Button className="rounded-full">Booking</Button>
          </BookingDialog>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
