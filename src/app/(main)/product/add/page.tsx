import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import { PRODUCT_CATEGORIES } from '@/graphql/categories';
import fetchData from '@/lib/fetch-data';
import { AddProduct } from '@/sections/product/view/add-product';
import { getServerSession } from 'next-auth';

const ProductAdd = async () => {
  const [session, { data }] = await Promise.all([
    getServerSession(NEXT_AUTH_OPTIONS),
    fetchData(PRODUCT_CATEGORIES),
  ]);

  const categories = data?.categories?.data || [];

  return (
    <AddProduct
      session={session!}
      categories={categories}
    />
  );
};

export default ProductAdd;
