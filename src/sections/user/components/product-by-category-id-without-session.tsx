import { USER_PRODUCT_QUERY } from '@/graphql/products';
import fetchData from '@/lib/fetch-data';
import ProductItem from '@/sections/home/components/product-item';
import React from 'react';

interface IProps {
  categoryId: string;
  categoryName: string;
  userId: string | number;
}

const ProductByCategoryIdWithourSession = async ({
  categoryId,
  categoryName,
  userId
}: IProps) => {
  const [{ data: productsData }] = await Promise.all([
    fetchData(
      USER_PRODUCT_QUERY,
      {
        filters: {
          author: {
            id: {
              eq: userId,
            },
          },
          category: {
            id: {
              eq: categoryId,
            },
          },
        },
        pagination: {
          page: 0,
          pageSize: 8,
        },
      }
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

export default ProductByCategoryIdWithourSession;
