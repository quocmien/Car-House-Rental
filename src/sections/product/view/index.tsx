import { HOME_CATEGORIES_QUERY } from '@/graphql/categories';
import { HOME_PRODUCTS_QUERY } from '@/graphql/products';
import fetchData from '@/lib/fetch-data';
import isEmpty from 'lodash/isEmpty';
import PlaceItem from '@/sections/home/components/place-item';
import Breadcrumb from '@/sections/product/components/breadcrumb';

const Home = async () => {
  const [{ data: productsData }, { data: categoriesData }] = await Promise.all([
    fetchData(HOME_PRODUCTS_QUERY, {
      pagination: {
        pageSize: 20,
        page: 0,
      },
      sort: ['createdAt:DESC']
    }),
    fetchData(HOME_CATEGORIES_QUERY, {
      filters: {},
    }),
  ]);

  const products = productsData?.products?.data;
  const categories = categoriesData?.categories?.data;

  return (
    <>
      <Breadcrumb
        title={'Products'}
      />
      <div className="min-h-full flex flex-col">
        <div className="flex flex-col">
          <section className="block-section">
              <div className="mt-[15px] mb-[50px]">
                  <h2 className="text-primary text-center opacity-80 text-[36px] font-light ">
                  Products
                  </h2>
              </div>
              <div className="container">
                  {!isEmpty(products) ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[30px]">
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
          <div className="block-section container">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
