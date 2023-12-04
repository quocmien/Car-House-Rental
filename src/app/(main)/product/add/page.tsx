import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import { AddProduct } from '@/sections/product/view/add-product';
import { getServerSession } from 'next-auth';
import React from 'react';

const ProductAdd = async () => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  return <AddProduct session={session!} />;
};

export default ProductAdd;
