"use client";

import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

function nextImageUrl(src: string, size: number) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
}


export default function LightBox({ title, images }: any) {
  const [open, setOpen] = React.useState(false);


  const slides = images.map((item: any) => {
    const width = item?.attributes?.formats?.large?.height || 1000
    const height = item?.attributes?.formats?.large?.width || 1000
    return {
      width,
      height,
      src: nextImageUrl(item?.attributes?.url, width),
      srcSet: imageSizes
        .concat(...deviceSizes)
        .filter((size) => size <= width)
        .map((size) => ({
          src: nextImageUrl(item?.attributes?.url, size),
          width: size,
          height: Math.round((height / width) * size),
        })),
    }
  });

  return (
    <>
      <button
        className="p-[7px] bg-white rounded-[7px]"
        type="button"
        onClick={() => setOpen(true)}
      >
        { title }
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Zoom]}
      />
    </>
  );
}
