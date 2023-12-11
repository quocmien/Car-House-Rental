'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductByCategoryIdWithourSession from '../components/product-by-category-id-without-session';

interface IProps {
  products: any;
  categories: any;
}

const UserInforTab = ({ products, categories }: IProps) => {
  return (
    <Tabs defaultValue={categories?.[0]?.id} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        {categories?.map((item: any) => {
          const category = item?.attributes;

          return (
            <TabsTrigger key={item?.id} value={item?.id}>
              {category?.name}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {products?.map((product: any, index: number) => {
        const items = product?.data?.products?.data;

        return (
          <TabsContent
            key={categories[index]?.id}
            value={categories[index]?.id}
          >
            <ProductByCategoryIdWithourSession
              key={categories[index]?.id}
              categoryName={categories[index]?.attributes?.name}
              products={items}
            />
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default UserInforTab;
