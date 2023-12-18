import Home from "@/sections/home/view/home";
import SEO from '@/utils/seo';

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

const HomePage: React.FC = async () => {
  return (
    <>
      <SEO
        title="Stay Drive Finder"
        description="Stay Drive Finder"
        keywords="staydrivefinder, bnb, rental car house"
      />
      <Home />
    </>
  );
};

export default HomePage;
