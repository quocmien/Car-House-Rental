import React from 'react';
import isEmpty from 'lodash/isEmpty';

interface IProps {
  menu?: Array<any> | [],
  title?: String | 'Page'
}

const Breadcrumb = async ({ title, menu }: IProps) => {
  return (
    <div className="container">
      <ol className='text-[10px] uppercase text-primary py-[10px] mb-[10px] font-bold flex'>
        <li>
          <a href="/">
            Home
          </a>
        </li>
        {
          menu?.map((item: any) => {
            return (
              item? 
              <li
                className='before:px-[5px] before:text-[#ccc] before:content-["/\00a0"]'>
                <a href={item?.link || '#'}>
                  {item?.name || ''}
                </a>
              </li>
              : ''
            );
           })
        }
        <li className='before:px-[5px] before:text-[#ccc] before:content-["/\00a0"]'>
          <span className="text-[#777]">
            {title}
          </span>
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumb;
