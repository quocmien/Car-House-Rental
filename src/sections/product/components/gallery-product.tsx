'use-client'

const GalleryProduct = ({ product }: any) => {
  const total = product?.previews?.data?.length || 1
  return (
    <div className="gallery-product container grid grid-cols-12 gap-[8px] overflow-hidden">
      <div className="col-span-12 md:col-span-6">
        <div
          className="gallery-product__item pt-[80%] bg-center bg-cover bg-no-repeat relative"
          style={{
            backgroundImage: `url("${product?.image?.data?.attributes?.url}")`
          }}
        >
          <div className="gallery-product__total
            absolute bg-[#4F545B] p-[5px] px-[10px]
            rounded-[5px]
            bottom-[10px] right-[10px] text-sm text-white"
          >
            1 / { total }
          </div>
        </div>
      </div>

      <div className={
        product?.previews?.data?.length > 2 ? 'flex h-full md:gap-[8px] flex-wrap md:col-span-3'
        : 'flex-wrap h-full md:col-span-6 gap-[8px]'
      }>
        {
          [0,1].map(item => {
            return (
            <div
              className="gallery-product__item h-1/2 w-full
                bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url("${ product?.previews?.data[item]?.attributes?.formats?.large?.url}")`
              }}
            />
          )
          })
        }
      </div>

      <div className={
        product?.previews?.data?.length > 2 ? 'flex h-full md:gap-[8px] flex-wrap md:col-span-3'
        : 'flex-wrap h-full md:col-span-6 gap-[8px]'
      }>
        {
          [2,3].map(item => {
            return (
            <div
              className="gallery-product__item h-1/2 w-full
                bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url("${ product?.previews?.data[item]?.attributes?.formats?.large?.url}")`
              }}
            />
          )
          })
        }
      </div>
    </div>
  )
}

export default GalleryProduct;
