import BrowseListings from './_components/browse-listings';
import EventNearYou from './_components/event-near-you';
import FindDeals from './_components/find-deals';
import Footer from './_components/footer';
import FromBlog from './_components/from-blog';
import Heroes from './_components/heroes';
import Partner from './_components/partner';
import PromoteLocation from './_components/promote-location';
import RecentPlaces from './_components/recent-places';
import RecentRelatedItems from './_components/recent-related-items';
import Subcribe from './_components/subcribe';

const HomePage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start flex-1 pb-10">
        <Heroes />
        <FindDeals />
        <RecentPlaces />
        <div className="block-section container">
          <hr />
        </div>
        <BrowseListings />
        <Subcribe />
        <PromoteLocation />
        <EventNearYou />
        <RecentRelatedItems />
        <FromBlog />
        <div className="block-section container">
          <hr />
        </div>
        <Partner />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
