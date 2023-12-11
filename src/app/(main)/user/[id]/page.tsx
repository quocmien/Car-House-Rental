import UserInfor from '@/sections/user/view/user-infor';

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const { data } = await fetchData(ALL_PRODUCTS_SLUGS);

//   const products = data?.products?.data || [];

//   return products.map((product: { attributes: { slug: any } }) => ({
//     slug: product?.attributes?.slug || undefined,
//   }));
// }

const DetaiUserPage = async ({ params: { id } }: any) => {
  return <UserInfor id={id} />;
};

export default DetaiUserPage;
