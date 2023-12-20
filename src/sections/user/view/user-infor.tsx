import React, { useContext } from 'react';
import { HOME_CATEGORIES_QUERY } from '@/graphql/categories';
import { USER_PRODUCT_QUERY } from '@/graphql/products';
import { USER_DETAIL_QUERY } from '@/graphql/users'
import fetchData from '@/lib/fetch-data';
import Breadcrumb from '@/sections/product/components/breadcrumb';
import QRCode from './qr-code';
import isEmpty from 'lodash/isEmpty';
import PlaceItem from '@/sections/home/components/place-item';
import { Link, Mail, MapPin, Phone } from 'lucide-react';

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


  const  [{ data: userDetail }, { data: productsData}] = await Promise.all([
    fetchData(USER_DETAIL_QUERY, {
      filters: {
        username: {
          eq: username
        }
      },
    }),
    fetchData(USER_PRODUCT_QUERY, {
      filters: {
        author: {
          username: {
            eq: username,
          },
        }
      },
      pagination: {
        page: 0,
        pageSize: 8,
      },
    })
  ])

  const user = userDetail?.usersPermissionsUsers?.data[0] || {}
  const products = productsData?.products?.data;
  const fullName = (user?.attributes.lastName && user?.attributes?.firstName)
    ? `${user?.attributes.lastName} ${user?.attributes?.firstName}`
    : user?.attributes?.username
  
  return (
    <div>
      <Breadcrumb title={fullName}/>
      {/* <section className="block">
        <h1 className="container text-primary text-center text-P4xl opacity-80 font-light">
          Profile
        </h1>
      </section> */}
      <div className="grid grid-cols-12 gap-4 mt-[15px] md:mt-[25px]">
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
              <div className="avatar w-[100px] mt-[20px] absolute bottom-[-15px] left-0">
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
                    {fullName}
                  </h2>

                  <figure className="flex items-center">
                    <div>
                      <Mail
                        strokeWidth={0.5}
                        className="w-[14px] h-[14px] mr-4 text-primary"
                      />  
                    </div>
                    <a href="mailto:email@example.com" className="text-sm text-primary">
                      {user?.attributes?.email}
                    </a>
                  </figure>

                  <figure className="flex items-center">
                    <div>
                      <MapPin
                        strokeWidth={0.5}
                        className="w-[14px] h-[14px] mr-4 text-primary"
                      />  
                    </div>
                    <a href="mailto:email@example.com" className="text-sm text-primary">
                      {user?.attributes?.address}
                    </a>
                  </figure>

                  <figure className="flex items-center">
                    <div>
                      <Phone
                        strokeWidth={0.5}
                        className="w-[14px] h-[14px] mr-4 text-primary"
                      />
                    </div>
                    <div className="text-sm">
                      {user?.attributes?.phone}
                    </div>
                  </figure>
                </div>
                <div className="col-span-12 pt-[20px] md:pt-0">
                  <div className="qr-code__container text-center flex">
                    <QRCode text={QR_TEXT + id} />
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </section>

        <section className="products col-span-12 md:col-span-8">
          <div className="container">
            <h3 className="text-center w-full p-[10px]">
              All Product
            </h3>
            {!isEmpty(products) ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-[30px]">
                {products?.map((item: any, index: number) => {
                const product = item?.attributes;

                return (
                    <div key={item?.id}>
                    <PlaceItem
                        priceText={`${product?.displayPrice}`}
                        category={product?.category?.data?.attributes?.name}
                        name={product?.name}
                        address={product?.address}
                        src={
                        product?.image?.data?.attributes?.formats?.medium?.url ||
                        product?.image?.data?.attributes?.url
                        }
                        verified
                        top
                        slug={product?.slug}
                    />
                    </div>
                );
                })}
            </div>
            ) : (
                <div className="flex justify-center">Not Found!</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserInfo;
