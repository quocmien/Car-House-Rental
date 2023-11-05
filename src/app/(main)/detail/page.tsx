import React from 'react';
import Breadcrumb from './_components/breadcrumb';
import Heading from './_components/heading';
import ImageSlide from './_components/image-silde';
import About from './_components/about';
import Features from './_components/features';
import Review from './_components/review/review';
import ReviewWriting from './_components/review-writing/review-writing';
import Address from './_components/address';

const DetaiPage = () => {
  return (
    <div>
      <Breadcrumb />
      <Heading />
      <ImageSlide />
      <div className="container lg:grid lg:grid-cols-12">
        <div className='lg:col-span-7'>
          <About />
          <Features />
          <Review />
          <ReviewWriting />
        </div>
        <div className='lg:col-span-5'>
          <Address />
        </div>
      </div>
    </div>
  );
};

export default DetaiPage;
