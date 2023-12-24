'use-client'

const TwoImage = ({ images }: any) => {
return (
  <div
    className="flex-wrap h-full md:col-span-6 gap-[8px] two-image"
  >
    {
      images?.map((item: any) => {
        return (
          <div
            key={item}
            className="gallery-product__item h-1/2 w-full
            bg-center bg-cover bg-no-repeat"
            style={{
            backgroundImage: `url("${ item?.attributes?.url}")`
            }}
          />
        )
      })
    }
  
  </div>
)
}

export default TwoImage;