import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import { HOME_CATEGORIES_QUERY } from '@/graphql/categories';
import fetchData from '@/lib/fetch-data';
import Breadcrumb from '@/sections/product/components/breadcrumb';
import { getServerSession } from 'next-auth/next';
import UserTab from './user-tabs';
import { USER_PRODUCT_QUERY } from '@/graphql/products';
import { PROFILE_BOOKING_QUERY } from '@/graphql/bookings';

const UserProfile = async () => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  if (!session) {
    return <div>Please Sign In!</div>;
  }

  const [{ data: categoriesData }, { data: bookingsData }] = await Promise.all([
    fetchData(HOME_CATEGORIES_QUERY, {
      filters: {},
    }),
    fetchData(
      PROFILE_BOOKING_QUERY,
      {
        filters: {
          product: {
            author: {
              username: {
                eq: session?.user?.username
              },
            },
          },
        },
        sort: ['createdAt:DESC']
      },
      session?.user?.accessToken
    ),
  ]);

  const categories = categoriesData?.categories?.data;
  const bookings = bookingsData?.bookings?.data;

  const productFetchers = categories?.map((item: any) =>
    fetchData(
      USER_PRODUCT_QUERY,
      {
        filters: {
          author: {
            id: {
              eq: session?.user?.id,
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
      },
      session?.user?.accessToken
    )
  );

  const products = await Promise.all(productFetchers);

  return (
    <section className="block mt-[30px]">
      <div className="container">
        <UserTab
          session={session}
          categories={categories}
          products={products}
          bookings={bookings}
        />
      </div>
    </section>
  );
};

export default UserProfile;
