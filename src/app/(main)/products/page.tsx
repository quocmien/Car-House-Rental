import Products from "@/sections/product/view/index";

export async function generateMetadata() {
  return {
    metadataBase: new URL('http://staydrivefinder.com/products'),
    title: 'Products - StayDriveFinder',
    description: 'Products - StayDriveFinder',
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
      title: 'Products - StayDriveFinder',
      description: 'Products - StayDriveFinder',
      url: process.env.DOMAIN,
      siteName: process.env.SITE_NAME,
      images: '/logo.png',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Products - StayDriveFinder',
      description: 'Products - StayDriveFinder',
      creator: process.env.SITE_NAME,
      images: '/logo.png'
    },
  };
}

const ProductsPage: React.FC = async () => {
  return (
    <>
      <Products />
    </>
  );
};

export default ProductsPage;
