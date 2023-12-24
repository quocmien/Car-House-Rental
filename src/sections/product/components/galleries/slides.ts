const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

function nextImageUrl(src: string, size: number) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
}

const generateSlides = (images: Array<any>) => {
  return images?.map(({ src, width, height }) => ({
    width,
    height,
    src: nextImageUrl(src, width),
    srcSet: imageSizes
      .concat(...deviceSizes)
      .filter((size) => size <= width)
      .map((size) => ({
        src: nextImageUrl(src, size),
        width: size,
        height: Math.round((height / width) * size),
      })),
  }));
};

export default generateSlides;
