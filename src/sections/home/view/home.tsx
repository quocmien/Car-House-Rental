import { HOME_CATEGORIES_QUERY } from '@/graphql/categories';
import { HOME_PRODUCTS_QUERY } from '@/graphql/products';
import fetchData from '@/lib/fetch-data';
import React from 'react';
import Heroes from '../components/heroes';
import FindDeals from '../components/find-deals';
import RecentPlaces from '../components/recent-places';
import BrowseListings from '../components/browse-listings';
import Subcribe from '../components/subcribe';
import PromoteLocation from '../components/promote-location';
import EventNearYou from '../components/event-near-you';
import RecentRelatedItems from '../components/recent-related-items';
import FromBlog from '../components/from-blog';
import Partner from '../components/partner';

const Home = async () => {
  const [
    {
      data: {
        products: { data: products },
      },
    },
    {
      data: {
        categories: { data: categories },
      },
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
