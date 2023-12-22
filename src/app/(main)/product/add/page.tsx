import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import { PRODUCT_ATTRIBUTES, PRODUCT_BENEFITS } from '@/graphql/attributes';
import { PRODUCT_CATEGORIES } from '@/graphql/categories';
import fetchData from '@/lib/fetch-data';
import { AddProduct } from '@/sections/product/view/add-product';
import { getServerSession } from 'next-auth';

const ProductAdd = async () => {
  const [
    session,
    {
      data
    },
    {
      data: benefitData
    },
  ] = await Promise.all([
    getServerSession(NEXT_AUTH_OPTIONS),
    fetchData(PRODUCT_CATEGORIES),
    fetchData(PRODUCT_BENEFITS),
  ]);

  const categories = data?.categories?.data || [];
  
  const benefits = benefitData?.benefits?.data || [];
  
  return <AddProduct session={session!} categories={categories} benefits={benefits} />;
};

export default ProductAdd;
