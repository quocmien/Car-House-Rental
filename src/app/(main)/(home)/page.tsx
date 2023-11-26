import { HOME_CATEGORIES_QUERY } from '@/graphql/categories';
import { HOME_PRODUCTS_QUERY } from '@/graphql/products';
import fetchData from '@/lib/fetch-data';
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

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://map.com'),
    title: 'Home page',
    description: 'Home page',
    applicationName: process.env.SITE_NAME,
    keywords: [],
    authors: [
      {
        name: 'abc',
        url: 'https://abc.vn/',
      },
    ],
    creator: 'abc',
    openGraph: {
      title: 'Home page',
      description: 'Home page',
      url: process.env.DOMAIN,
      siteName: process.env.SITE_NAME,
      images:
        'https://res.cloudinary.com/cinsio68/image/upload/v1700985138/Patuxai_Monument_de_la_Victoire_a_Vientiane_Laos_background_452378766c.jpg',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Home page',
      description: 'Home page',
      creator: process.env.SITE_NAME,
      images:
        'https://res.cloudinary.com/cinsio68/image/upload/v1700985138/Patuxai_Monument_de_la_Victoire_a_Vientiane_Laos_background_452378766c.jpg',
    },
  };
}

const HomePage = async () => {
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

export default HomePage;
