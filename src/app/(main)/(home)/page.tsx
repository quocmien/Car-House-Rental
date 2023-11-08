import { getData } from '@/lib/fetch-data';
import BrowseListings from './_components/browse-listings';
import EventNearYou from './_components/event-near-you';
import FindDeals from './_components/find-deals';
import FromBlog from './_components/from-blog';
import Heroes from './_components/heroes';
import Partner from './_components/partner';
import PromoteLocation from './_components/promote-location';
import RecentPlaces from './_components/recent-places';
import RecentRelatedItems from './_components/recent-related-items';
import Subcribe from './_components/subcribe';

const HomePage = async () => {
  const { products } = await getData('products');

  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col">
        <Heroes />
        <FindDeals />
        <RecentPlaces products={products} />
        <div className="block-section container">
          <hr />
        </div>
        <BrowseListings />
        <Subcribe />
        <PromoteLocation products={products} />
        <EventNearYou />
        <RecentRelatedItems />
        <FromBlog />
        <div className="block-section container">
          <hr />
        </div>
        <Partner />
      </div>
    </div>
  );
};

export default HomePage;
