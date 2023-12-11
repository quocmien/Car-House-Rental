import ProductItem from '@/sections/home/components/product-item';

interface IProps {
  products: any;
  categoryName: string;
}

const ProductByCategoryIdWithourSession = ({
  products,
  categoryName,
}: IProps) => {
  
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
