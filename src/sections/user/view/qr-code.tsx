"use client"
import * as React from "react"
import { useQRCode } from 'next-qrcode';


const QRCode = async () => {
    const { SVG } = useQRCode();

    return (
        <SVG
            text={'https://github.com/bunlong/next-qrcode'}
            options={{
                margin: 2,
                width: 200,
                color: {
                dark: '#010599FF',
                light: '#FFBF60FF',
                },
            }}
        />

    )
}


export default QRCode;
