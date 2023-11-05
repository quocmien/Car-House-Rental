import BrowseListings from './_components/browse-listings';
import FindDeals from './_components/find-deals';
import Footer from './_components/footer';
import Heroes from './_components/heroes';
import PromoteLocation from './_components/promote-location';
import RecentPlaces from './_components/recent-places';
import Subcribe from './_components/subcribe';

const HomePage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start flex-1 pb-10">
        <Heroes />
        <FindDeals />
        <RecentPlaces />
        <div className='block-section container'>
          <hr />
        </div>
        <BrowseListings />
        <Subcribe />
        <PromoteLocation />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
