import { HOME_CATEGORIES_QUERY } from '@/graphql/categories';
import { HOME_PRODUCTS_QUERY } from '@/graphql/products';
import fetchData from '@/lib/fetch-data';
import BrowseListings from '../components/browse-listings';
import EventNearYou from '../components/event-near-you';
import FindDeals from '../components/find-deals';
import FromBlog from '../components/from-blog';
import Heroes from '../components/heroes';
import Partner from '../components/partner';
import PromoteLocation from '../components/promote-location';
import RecentPlaces from '../components/recent-places';
import RecentRelatedItems from '../components/recent-related-items';
import Subcribe from '../components/subcribe';

const Home = async () => {
  const [
    {
      data: productsData
    },
    {
      data: categoriesData,
    },
  ] = await Promise.all([
    fetchData(HOME_PRODUCTS_QUERY),
    fetchData(HOME_CATEGORIES_QUERY, {
      filters: {
        children: {
          id: {
            notNull: true,
          },
        },
      },
    }),
  ]);

  const products = productsData?.products?.data
  const categories = categoriesData?.categories?.data

  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col">
        <Heroes />
        <FindDeals />
        <RecentPlaces products={products || []} />
        <div className="block-section container">
          <hr />
        </div>
        <BrowseListings categories={categories || []} />
        <Subcribe />
        <PromoteLocation products={products || []} />
        <EventNearYou />
        <RecentRelatedItems products={products || []} />
        <FromBlog />
        <div className="block-section container">
          <hr />
        </div>
        <Partner />
      </div>
    </div>
  );
};

export default Home;
