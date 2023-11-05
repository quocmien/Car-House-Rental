import React from 'react';

const Breadcrumb = () => {
  return (
    <div className="container">
      <ol className='text-[10px] uppercase text-primary py-[10px] mb-[10px] font-bold flex'>
        <li>
          <a href="">
            Home
          </a>
        </li>
        <li className='before:px-[5px] before:text-[#ccc] before:content-["/\00a0"]'>
          <a href="">
            pages
          </a>
        </li>
        <li className='before:px-[5px] before:text-[#ccc] before:content-["/\00a0"]'>
          <a href="" className="text-[#777]">
            Contact
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumb;
