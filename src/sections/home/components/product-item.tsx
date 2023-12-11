import { Button } from '@/components/ui/button';
import PlaceItem from './place-item';
import { MoveRight } from 'lucide-react';
import isEmpty from 'lodash/isEmpty';

// const spanCol = [1, 1, 3, 2, 1, 2];

interface IProps {
  products: any;
  title: string;
  description?: string;
  isViewAll?: boolean;
}

const ProductItem = ({
  products,
  title,
  description,
  isViewAll = true,
}: IProps) => {

  return (
    <section className="block-section">
      <div className="container">
        <div className="mt-[15px] mb-[50px]">
          <h2 className="text-primary text-center opacity-80 text-[36px] font-light ">
            {title}
          </h2>
          {description && (
            <h3 className="text-foreground text-center opacity-60 text-base mb-[15px] mt-[10px]">
              {description}
            </h3>
          )}
        </div>
        {!isEmpty(products) ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[30px]">
            {products?.map((item: any, index: number) => {
              const product = item?.attributes;

              return (
                <div key={item?.id}>
                  <PlaceItem
                    priceText={`${product?.displayPrice}`}
                    category={product?.category?.data?.attributes?.name}
                    name={product?.name}
                    address={product?.address}
                    src={
                      product?.image?.data?.attributes?.formats?.medium?.url ||
                      product?.image?.data?.attributes?.url
                    }
                    verified
                    top
                    slug={product?.slug}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center">Not Found {title}!</div>
        )}

        {/* View All */}
        {isViewAll && (
          <div className="w-full flex justify-center items-center pt-[30px]">
            <a className="border-2 rounded-full font-bold px-3 py-[6px] hover:bg-transparent hover:border-[#0000004d] flex items-center cursor-pointer">
              <span className="text-xs uppercase mr-2 text-primary">
                View all listings
              </span>
              <MoveRight strokeWidth={0.5} className="text-primary" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductItem;
