'use-client'

const OneImage = ({ images }: any) => {
  return (
    <div className="flex-wrap h-full md:col-span-6 gap-[8px]"
    >
      <div
        className="gallery-product__item h-full w-full
          bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("${ images[0]?.attributes?.url}")`
        }}
      />
    </div>
  )
}

export default OneImage;