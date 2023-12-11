import React from 'react';
import ProductByCategoryId from '../../components/product-by-category-id';
import { Session } from 'next-auth';

interface IProps {
  products: any;
  categories: any;
  session: Session;
}

const Product = ({ products, categories, session }: IProps) => {
  return (
    <div>
      {products?.map((product: any, index: string | number) => {
        const items = product?.data?.products?.data;

        return (
          <ProductByCategoryId
            key={categories[index]?.id}
            products={items}
            categoryName={categories[index]?.attributes?.name}
          />
        );
      })}
    </div>
  );
};

export default Product;
