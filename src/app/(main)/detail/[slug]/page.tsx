import { ALL_PRODUCTS_SLUGS, HOME_PRODUCTS_QUERY } from '@/graphql/products';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import About from '../_components/about';
import Address from '../_components/address';
import Breadcrumb from '../_components/breadcrumb';
import Features from '../_components/features';
import Heading from '../_components/heading';
import ImageSlide from '../_components/image-silde';
import OpeningHours from '../_components/opening-hours';
import ReviewWriting from '../_components/review-writing/review-writing';
import Review from '../_components/review/review';
import ShareThisListing from '../_components/share-listing';
import fetchData from '@/lib/fetch-data';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const { data } = await fetchData(ALL_PRODUCTS_SLUGS);

  const products = data?.products?.data || [];
  
  return products.map((product: { attributes: { slug: any } }) => ({
    slug: product?.attributes?.slug || undefined,
  }));
}

const DetaiPage = async ({ params: { slug } }: any) => {
  const { data: product } = await fetchDataRest(`products/slug/${slug}`);

  return (
    <div>
      <Breadcrumb />
      <Heading product={product?.attributes || {}} />
      <ImageSlide product={product?.attributes || {}} />
      <div className="container lg:grid lg:grid-cols-12  gap-[30px]">
        <div className="lg:col-span-7">
          <About content={product?.attributes?.content || ''} />
          <Features />
          <Review />
          <ReviewWriting />
        </div>
        <div className="lg:col-span-5 flex flex-col gap-[30px]">
          <Address />
          <OpeningHours />
          <ShareThisListing />
        </div>
      </div>
    </div>
  );
};

export default DetaiPage;
