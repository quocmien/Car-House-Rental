'use-client'

const OneImage = ({ image }: any) => {
  return (
    <div className="flex-wrap h-full md:col-span-6 gap-[8px]"
    >
      <div
        className="gallery-product__item h-1/2 w-full
          bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("${ image[0]?.attributes?.url}")`
        }}
      />
    </div>
  )
}

export default OneImage;