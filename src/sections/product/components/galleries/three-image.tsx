'use-client'

const ThreeImage = ({ images }: any) => {
return (
    <>
      <div
        className="flex-wrap h-full md:col-span-3 gap-[8px] flex three-image"
      >
        {
          [0, 1].map((index: any) => {
            return (
              <div
                className="gallery-product__item h-1/2 w-full
                bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url("${ images[index]?.attributes?.url}")`
                }}
              />
            )
          })
        }
    
      </div>

      <div
        className="flex-wrap h-full md:col-span-3 gap-[8px]"
      >
          <div
            className="gallery-product__item h-full w-full
            bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url("${ images[2]?.attributes?.url}")`
            }}
          />
      </div>
    </>
)
}

export default ThreeImage;