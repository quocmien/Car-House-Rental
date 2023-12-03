import { fetchDataRest } from '@/lib/fetch-data-rest';
import React from 'react';
import Breadcrumb from '../components/breadcrumb';
import Heading from '../components/heading';
import ImageSlide from '../components/image-silde';
import About from '../components/about';
import Features from '../components/features';
import Review from '../components/review/review';
import ReviewWriting from '../components/review-writing/review-writing';
import Address from '../components/address';
import OpeningHours from '../components/opening-hours';
import ShareThisListing from '../components/share-listing';

interface IProps {
  slug: string;
}

const ProductDetail = async ({ slug }: IProps) => {
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

export default ProductDetail;
