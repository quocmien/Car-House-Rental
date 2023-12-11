import ProductItem from '@/sections/home/components/product-item';

interface IProps {
  categoryName: string;
  products: any;
}

const ProductByCategoryId = ({ products, categoryName }: IProps) => {

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
