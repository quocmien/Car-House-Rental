import React, { useContext } from 'react';
import { HOME_CATEGORIES_QUERY } from '@/graphql/categories';
import { USER_PRODUCT_QUERY } from '@/graphql/products';
import { USER_DETAIL_QUERY } from '@/graphql/users'
import fetchData from '@/lib/fetch-data';
import Breadcrumb from '@/sections/product/components/breadcrumb';
import ProductByCategoryIdWithourSession from '../components/product-by-category-id-without-session';
import QRCode from './qr-code';
import UserInforTab from './user-infor-tab';
import SEO from '@/utils/seo'

interface IProps {
  id: any;
}

const QR_TEXT = process.env.NEXT_PUBLIC_DOMAIN + '/user/';

const UserInfo = async ({ id }: IProps) => {
  const [{ data: categoriesData }] = await Promise.all([
    fetchData(HOME_CATEGORIES_QUERY, {
      filters: {},
    }),

    
  ]);

  const categories = categoriesData?.categories?.data;

  const username = id?.replace('%40', '@'); // Replace '%40' with '@'

  const productFetchers = categories?.map((item: any) =>
    fetchData(USER_PRODUCT_QUERY, {
      filters: {
        author: {
          username: {
            eq: username,
          },
        },
        category: {
          id: {
            eq: item?.id,
          },
        },
      },
      pagination: {
        page: 0,
        pageSize: 8,
      },
    })
  );

  const  [{ data: userDetail }] = await Promise.all([
    fetchData(USER_DETAIL_QUERY, {
      filters: {
        username: {
          eq: username
        }
      },
    }),
  ])

  const user = userDetail?.usersPermissionsUsers?.data[0] || {}


  const products = await Promise.all(productFetchers);
  
  return (
    <div>
      <Breadcrumb />
      {/* <section className="block">
        <h1 className="container text-primary text-center text-4xl opacity-80 font-light">
          Profile
        </h1>
      </section> */}
      <div className="grid grid-cols-12 gap-4">
        <section className="header-profile block col-span-12 md:col-span-4">      
          <div
            className="w-full header-profile__top p-[15px] border pt-[50%] md:pt-[20%] relative"
            style={
              {
                backgroundImage: `url("/logo.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }
            }
          >
            <div className="container">
              <div className="avatar w-[150px] mt-[20px] absolute bottom-[-15px] left-0">
                <div
                  className="avatar__container pt-[100%] rounded-full"
                  style={
                    {
                      backgroundImage: `url("${user?.attributes?.avatar?.data?.attributes?.url || ''}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }
                  }
                >
                </div>
              </div>
            </div>
            
          </div>
          <div className="container pt-[20px]">
            <div className="info-profile pt-[10px]">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                  <h2 className="font-bold">
                    { user?.attributes.lastName } 
                    { user?.attributes.firstName }
                  </h2>

                  <p className="info-text">
                    <strong> Email: </strong> {user?.attributes?.email}
                  </p>

                  <p className="info-text">
                    <strong>Address: </strong> {user?.attributes?.address}
                  </p>

                  <p className="info-text">
                    <strong>Phone number:</strong> {user?.attributes?.phone}
                  </p>
                </div>
                <div className="col-span-12 pt-[20px] md:pt-0">
                  <div className="qr-code__container text-center flex justify-center md:justify-left">
                    <QRCode text={QR_TEXT + id} />
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserInfo;
