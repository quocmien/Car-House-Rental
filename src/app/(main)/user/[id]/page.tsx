import UserInfor from '@/sections/user/view/user-infor';
import fetchData from '@/lib/fetch-data';
import { USER_DETAIL_QUERY } from '@/graphql/users'

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
  const fullName = (user?.attributes?.lastName &&  user?.attributes?.firstName)
    ? `${user?.attributes?.lastName} ${user?.attributes?.firstName}`
    : user?.attributes?.username

  return {
    title: `${fullName} - StayDriveFinder`,
    description: `Profile ${fullName} in StayDriveFinder`,
    keywords: user?.attributes?.name,

    metadataBase: new URL('https://staydrivefinder.com'),
    applicationName: process.env.SITE_NAME,
    authors: [
      {
        name: `Profile ${fullName}`,
        url: 'https://staydrivefinder.com',
      },
    ],
    creator: `${fullName}`,
    openGraph: {
      title: `${fullName}`,
      description: `Profile ${fullName} in StayDriveFinder`,
      url: process.env.DOMAIN,
      siteName: process.env.SITE_NAME,
      images: user?.attributes?.avatar?.data?.attributes?.url || '/logo.png',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${fullName}`,
      description: `Profile ${fullName} in StayDriveFinder`,
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
