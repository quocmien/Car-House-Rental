import { ALL_PRODUCTS_SLUGS, PRODUCT_DETAIL_QUERY } from '@/graphql/products';
import fetchData from '@/lib/fetch-data';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import ProductDetail from '@/sections/product/view/detail';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const { data } = await fetchData(ALL_PRODUCTS_SLUGS);

  const products = data?.products?.data || [];

  return products.map((product: { attributes: { slug: any } }) => ({
    slug: product?.attributes?.slug || undefined,
  }));
}

export async function generateMetadata({ params: { slug } }: any) {

  const { data: product } = await fetchDataRest(`products/slug/${slug}`);
  const images = product?.attributes?.previews?.data[0]

  return {
    title: product?.attributes?.name,
    description: product?.attributes?.description,
    keywords: product?.attributes?.name,

    metadataBase: new URL('https://staydrivefinder.com'),
    applicationName: process.env.SITE_NAME,
    authors: [
      {
        name: 'TES SOLUTIONS',
        url: 'https://staydrivefinder.com',
      },
    ],
    creator: 'TES',
    openGraph: {
      title: product?.attributes?.name,
      description: product?.attributes?.description,
      url: process.env.DOMAIN,
      siteName: process.env.SITE_NAME,
      images: images?.url || '/logo.png',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product?.attributes?.name,
      description: product?.attributes?.description,
      creator: process.env.SITE_NAME,
      images: images?.url || '/logo.png',
    },
  };
}

const DetaiPage = async ({ params: { slug } }: any) => {
  return <ProductDetail slug={slug} />;
};

export default DetaiPage;
