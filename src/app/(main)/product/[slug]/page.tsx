import { ALL_PRODUCTS_SLUGS } from '@/graphql/products';
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

  return {
    title: product?.attributes?.name,
    description: product?.attributes?.description,
    keywords: product?.attributes?.name,

    metadataBase: new URL('https://staydrivefinder.com'),
    applicationName: process.env.SITE_NAME,
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

const DetaiPage = async ({ params: { slug } }: any) => {
  return <ProductDetail slug={slug} />;
};

export default DetaiPage;
