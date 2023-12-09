import { USER_PRODUCT_QUERY } from '@/graphql/products';
import fetchData from '@/lib/fetch-data';
import ProductItem from '@/sections/home/components/product-item';
import { Session } from 'next-auth';
import React from 'react';

interface IProps {
  id: string;
  categoryName: string;
  session: Session;
}

const ProductByCategoryId = async ({ id, session, categoryName }: IProps) => {
  const [{ data: productsData }] = await Promise.all([
    fetchData(
      USER_PRODUCT_QUERY,
      {
        filters: {
          author: {
            id: {
              eq: session?.user?.id,
            },
          },
          category: {
            id: {
              eq: id,
            },
          },
        },
        pagination: {
          page: 0,
          pageSize: 8,
        },
      },
      session?.user?.accessToken
    ),
  ]);

  const products = productsData?.products?.data;

  return (
    <ProductItem
      products={products || []}
      title={categoryName}
      description=""
      isViewAll={false}
    />
  );
};

export default ProductByCategoryId;
