import MapDefault from '@/components/map/map-default';
import { HOME_CATEGORIES_QUERY } from '@/graphql/categories';
import { HOME_PRODUCTS_QUERY } from '@/graphql/products';
import fetchData from '@/lib/fetch-data';
import BrowseListings from '@/sections/home/components/browse-listings';
import EventNearYou from '@/sections/home/components/event-near-you';
import FromBlog from '@/sections/home/components/from-blog';
import Partner from '@/sections/home/components/partner';
import PromoteLocation from '@/sections/home/components/promote-location';
import RecentPlaces from '@/sections/home/components/recent-places';
import RecentRelatedItems from '@/sections/home/components/recent-related-items';
import Subcribe from '@/sections/home/components/subcribe';
import React from 'react';
import FilterForm from '../components/filter-form';
import SearchResults from '../components/search-results';

const MapDetail = async () => {
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
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="h-[calc(100vh_-_43px)] relative overflow-hidden">
            <MapDefault
              center={{ lat: 21.027763, lng: 105.83416 }}
              currentLocation={{ lat: 21.027763, lng: 105.83416 }}
            />
          </div>
        </div>
        <div>
          <FilterForm />
          <SearchResults products={products || []} />
        </div>
      </div>
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
  );
};

export default MapDetail;