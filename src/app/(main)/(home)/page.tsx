import Home from "@/sections/home/view/home";

export async function generateMetadata() {
  return {
    metadataBase: new URL('http://staydrivefinder.com/'),
    title: 'Home - StayDriveFinder',
    description: 'Home - StayDriveFinder',
    applicationName: process.env.SITE_NAME,
    keywords: [],
    authors: [
      {
        name: 'TES',
        url: 'http://staydrivefinder.com/',
      },
    ],
    creator: 'TES',
    openGraph: {
      title: 'Home - StayDriveFinder',
      description: 'Home - StayDriveFinder',
      url: process.env.DOMAIN,
      siteName: process.env.SITE_NAME,
      images: '/logo.png',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Home - StayDriveFinder',
      description: 'Home - StayDriveFinder',
      creator: process.env.SITE_NAME,
      images: '/logo.png'
    },
  };
}

const HomePage: React.FC = async () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;
