'use-client'
import OneImage from './galleries/one-image'
import TwoImage from './galleries/two-image'
import ThreeImage from './galleries/three-image'
import FourImage from './galleries/four-image'
import LightBox from './galleries/light-box'

const GalleryProduct = ({ product }: any) => {
  const total = product?.previews?.data?.length || 1;
  let ImageComponent;

  switch (total) {
    case 1:
      ImageComponent = OneImage;
      break;
    case 2:
      ImageComponent = TwoImage;
      break;
    case 3:
      ImageComponent = ThreeImage;
      break;
    default:
      ImageComponent = FourImage;
      break;
  }

  return (
    <div className="gallery-product container grid grid-cols-12 gap-[8px] overflow-hidden relative">
      <div className={total === 0 ? 'col-span-12 md:col-span-12' : 'col-span-12 md:col-span-6'}>
        <div
          className="gallery-product__item pt-[80%] bg-center bg-cover bg-no-repeat relative"
          style={{
            backgroundImage: `url("${product?.image?.data?.attributes?.url}")`
          }}
        >
          <div className="gallery-product__total
            absolute bg-[#4F545B] p-[5px] px-[10px]
            rounded-[5px]
            bottom-[10px] right-[10px] text-sm text-white
            d-none md:d-block
          ">
            1 / {total}
          </div>
        </div>
      </div>

      <ImageComponent images={product?.previews?.data} />

      <button className="absolute bottom-[10px] right-[25px]">
        <LightBox
          title={'Show all photos'}
          images={product?.previews?.data || []}
        />
      </button>
      
    </div>
  )
}

export default GalleryProduct;
