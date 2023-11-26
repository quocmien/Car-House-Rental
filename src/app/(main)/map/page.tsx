import MapDefault from '@/components/map/map-default';
import BrowseListings from '../(home)/_components/browse-listings';
import EventNearYou from '../(home)/_components/event-near-you';
import FromBlog from '../(home)/_components/from-blog';
import Partner from '../(home)/_components/partner';
import PromoteLocation from '../(home)/_components/promote-location';
import RecentPlaces from '../(home)/_components/recent-places';
import RecentRelatedItems from '../(home)/_components/recent-related-items';
import Subcribe from '../(home)/_components/subcribe';
import FilterForm from './_component/filter-form';
import SearchResults from './_component/search-results';
import { HOME_PRODUCTS_QUERY } from '@/graphql/products';
import fetchData from '@/lib/fetch-data';
import { HOME_CATEGORIES_QUERY } from '@/graphql/categories';

const MapPage = async () => {
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

export default MapPage;
