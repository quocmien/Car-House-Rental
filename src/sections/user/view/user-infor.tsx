import { HOME_CATEGORIES_QUERY } from '@/graphql/categories';
import fetchData from '@/lib/fetch-data';
import Breadcrumb from '@/sections/product/components/breadcrumb';
import ProductByCategoryIdWithourSession from '../components/product-by-category-id-without-session';
import UserInforFormWithoutSession from '../components/user-infor-form-without-sesstion';
import QRCode from './qr-code';

interface IProps {
  id: number;
}

const UserInfo = async ({ id }: IProps) => {
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
          Profile
        </h1>
      </section>
      <section className="block">
        <div className="container">
          <div className="grid grid-cols-6 gap-4">
            <div className="md:col-start-2 md:col-span-4">
              <h3 className="text-primary text-lg mb-[10px]">QR Code</h3>
              <div className="qr-code__container text-center">
                <QRCode />
              </div>
              <UserInforFormWithoutSession userId={id} />
            </div>
          </div>
        </div>
      </section>
      {categories?.map((item: any) => {
        const category = item?.attributes;

        return (
          <ProductByCategoryIdWithourSession
            key={item?.id}
            categoryId={item?.id}
            userId={id}
            categoryName={category?.name}
          />
        );
      })}
    </div>
  );
};

export default UserInfo;
