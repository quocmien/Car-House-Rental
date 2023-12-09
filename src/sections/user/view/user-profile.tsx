import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import { HOME_CATEGORIES_QUERY } from '@/graphql/categories';
import fetchData from '@/lib/fetch-data';
import Breadcrumb from '@/sections/product/components/breadcrumb';
import { getServerSession } from 'next-auth/next';
import ProductByCategoryId from '../components/product-by-category-id';
import UserInforForm from '../components/user-infor-form';
import QRCode from './qr-code';

const UserProfile = async () => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  if (!session) {
    return <div>Please Sign In!</div>;
  }

  const [{ data: categoriesData }] = await Promise.all([
    fetchData(HOME_CATEGORIES_QUERY, {
      filters: {},
    }),
  ]);

  const categories = categoriesData?.categories?.data;

  return (
    <div>
      <Breadcrumb />
      <section className="block">
        <h1 className="container text-primary text-center text-4xl opacity-80 font-light">
          Your Profile
        </h1>
      </section>
      <section className="block">
        <div className="container">
          <div className="grid grid-cols-6 gap-4">
            <div className="md:col-start-2 md:col-span-4">
              <h3 className="text-primary text-lg mb-[10px]">About you</h3>
              <div className="qr-code__container text-center">
                <QRCode />
              </div>
              <UserInforForm session={session} />
            </div>
          </div>
        </div>
      </section>
      {categories?.map((item: any) => {
        const category = item?.attributes;

        return (
          <ProductByCategoryId
            key={item?.id}
            id={item?.id}
            session={session}
            categoryName={category?.name}
          />
        );
      })}
    </div>
  );
};

export default UserProfile;
