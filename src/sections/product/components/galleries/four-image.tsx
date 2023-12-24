'use-client'

const FourImage = ({ images }: any) => {
  return (
      <div className="w-full grid grid-cols-12 col-span-6 gap-[8px]">
        <div
          className="flex-wrap h-full md:col-span-6 gap-[8px] flex four-image"
        >
          {
            [0, 1].map((value: any) => {
              return (
                <div
                  key={value}
                  className="gallery-product__item h-1/2 w-full
                  bg-center bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url("${ images[value]?.attributes?.url}")`
                  }}
                />
              )
            })
          }
      
        </div>

        <div
          className="flex-wrap h-full md:col-span-6 gap-[8px] flex four-image"
        >
          {
            [2, 3].map((item: any) => {
              return (
                <div
                  key={item}
                  className="gallery-product__item h-1/2 w-full
                  bg-center bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url("${ images[item]?.attributes?.url}")`
                  }}
                />
              )
            })
          }
        </div>
      </div>
  )
}

export default FourImage;