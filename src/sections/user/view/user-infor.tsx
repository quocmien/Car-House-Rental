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

  console.log('=====> userDetail', user)

  const products = await Promise.all(productFetchers);
  
  return (
    <div>
      <SEO
        title={`${user?.attributes?.firstName} ${user?.attributes?.lastName} - Profile`} // Set your desired title
        description={`Profile of ${user?.attributes?.firstName} ${user?.attributes?.lastName}`} // Set the description
        keywords={user?.attributes?.username}
        image={user?.attributes?.avatar?.data?.attributes?.url || '/logo.png'}
      />
      <Breadcrumb />
      {/* <section className="block">
        <h1 className="container text-primary text-center text-4xl opacity-80 font-light">
          Profile
        </h1>
      </section> */}
      <section className="header-profile block">      
        <div
          className="w-full header-profile__top p-[15px] border pt-[50%] relative"
          style={
            {
              backgroundImage: `url("/logo.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }
          }
        >
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

      <ul className="list-feature fixed right-0 top-[48%]">
        <li className="item-product p-[5px] border bg-primary text-white rounded-l-lg">
          Profile
        </li>
        <li className="item-product p-[5px] border bg-primary text-white rounded-l-lg">
          Product
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
