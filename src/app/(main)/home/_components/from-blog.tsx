import React from 'react';
import BlogItem from './blog-item';
import { BLOG_LIST } from '@/mock/common';

const FromBlog = () => {
  return (
    <section className="block-section !pb-[60px]">
      <div className="container">
        <div className="mt-[15px] mb-[50px]">
          <h2 className="text-primary opacity-80 text-[36px] font-light ">
          From the Blog
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {BLOG_LIST.map((blog, idx) => (
            <BlogItem
              key={idx}
              name={blog.name}
              date={blog.date}
              desc={blog.desc}
              linkMore={blog.linkMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FromBlog;
