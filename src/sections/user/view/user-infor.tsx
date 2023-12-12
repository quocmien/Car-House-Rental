import { HOME_CATEGORIES_QUERY } from '@/graphql/categories';
import { USER_PRODUCT_QUERY } from '@/graphql/products';
import fetchData from '@/lib/fetch-data';
import Breadcrumb from '@/sections/product/components/breadcrumb';
import ProductByCategoryIdWithourSession from '../components/product-by-category-id-without-session';
import QRCode from './qr-code';
import UserInforTab from './user-infor-tab';

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

  const products = await Promise.all(productFetchers);
  
  return (
    <div>
      <Breadcrumb />
      <section className="block">
        <h1 className="container text-primary text-center text-4xl opacity-80 font-light">
          Profile
        </h1>
      </section>
      <section className="block">
        <div className="container">
          <div className="grid grid-cols-6 gap-4">
            <div className="md:col-start-2 md:col-span-4">
              <div className="qr-code__container text-center flex justify-center">
                <QRCode text={QR_TEXT + id} />
              </div>
            </div>
          </div>
          <div className='mt-3 flex justify-center'>
            <UserInforTab categories={categories} products={products} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserInfo;
