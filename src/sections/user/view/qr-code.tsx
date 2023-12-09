'use client';
import * as React from 'react';
import { useQRCode } from 'next-qrcode';
import { usePathname } from 'next/navigation';

const QRCode = async () => {
  const pathname = usePathname();
  const { SVG } = useQRCode();

  const text = process.env.NEXT_PUBLIC_DOMAIN + pathname

  return (
    <SVG
      text={text}
      options={{
        margin: 2,
        width: 200,
        color: {
          dark: '#010599FF',
          light: '#FFBF60FF',
        },
      }}
    />
  );
};

export default QRCode;
