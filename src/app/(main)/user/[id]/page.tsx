import UserInfor from '@/sections/user/view/user-infor';
import fetchData from '@/lib/fetch-data';
import { USER_DETAIL_QUERY } from '@/graphql/users'

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const { data } = await fetchData(ALL_PRODUCTS_SLUGS);

//   const products = data?.products?.data || [];

//   return products.map((product: { attributes: { slug: any } }) => ({
//     slug: product?.attributes?.slug || undefined,
//   }));
// }

export async function generateMetadata({ params: { id } }: any) {
  const username = await id?.replace('%40', '@'); // Replace '%40' with '@'

  const [{ data: userDetail }] = await Promise.all([
    fetchData(USER_DETAIL_QUERY, {
      filters: {
        username: {
          eq: username
        }
      },
    })
  ])

  const user = userDetail?.usersPermissionsUsers?.data[0] || {}

  return {
    title: `${user?.attributes?.lastName} ${user?.attributes?.firstName}`,
    description: `Profile ${user?.attributes?.lastName} ${user?.attributes?.firstName} in StayDriveFinder`,
    keywords: user?.attributes?.name,

    metadataBase: new URL('https://staydrivefinder.com'),
    applicationName: process.env.SITE_NAME,
    authors: [
      {
        name: `Profile ${user?.attributes?.lastName} ${user?.attributes?.firstName}`,
        url: 'https://staydrivefinder.com',
      },
    ],
    creator: `${user?.attributes?.lastName} ${user?.attributes?.firstName}`,
    openGraph: {
      title: `${user?.attributes?.lastName} ${user?.attributes?.firstName}`,
      description: `Profile ${user?.attributes?.lastName} ${user?.attributes?.firstName} in StayDriveFinder`,
      url: process.env.DOMAIN,
      siteName: process.env.SITE_NAME,
      images: user?.attributes?.avatar?.data?.attributes?.url || '/logo.png',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${user?.attributes?.lastName} ${user?.attributes?.firstName}`,
      description: `Profile ${user?.attributes?.lastName} ${user?.attributes?.firstName} in StayDriveFinder`,
      url: process.env.DOMAIN,
      siteName: process.env.SITE_NAME,
      images: user?.attributes?.avatar?.data?.attributes?.url || '/logo.png',
    },
  };
}

const DetaiUserPage = async ({ params: { id } }: any) => {
  return <UserInfor id={id} />;
};

export default DetaiUserPage;
