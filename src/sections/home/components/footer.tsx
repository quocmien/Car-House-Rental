import { Facebook, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full mt-[30px] border-t">
      <div className="block-section">
        <div className="container  ">
          <div className="md:ml-auto w-full justify-between md:justify-end flex first-letter:gap-x-2 text-xs">
            <div className="flex-1 text-sm text-[#898989]">
              Stay Drive BNB
              <span className="text-primary">
                <a href="">Terms of Use</a>
              </span>{' '}
              and{' '}
              <span className="text-primary">
                <a href="">Privacy Policy</a>
              </span>
              .
            </div>
            <div className="flex items-center flex-1 gap-x-2 justify-end">
              <a href="">
                <Twitter className="w-7 h-7 p-1 text-primary fill-primary border-2 border-[#0000001a] hover:border-[#00000033] rounded-full" />
              </a>
              <a href="">
                <Facebook className="w-7 h-7 p-1 text-primary fill-primary border-2 border-[#0000001a] hover:border-[#00000033] rounded-full" />
              </a>
              <a href="">
                <Youtube className="w-7 h-7 p-1 text-primary border-2 border-[#0000001a] hover:border-[#00000033] rounded-full" />
              </a>
            </div>
          </div>
          <div className="w-full h-full absolute top-0 left-0 overflow-hidden -z-10">
            <div
              className="absolute top-0 left-0 h-full overflow-hidden -z-10 w-full opacity-30 bg-cover "
              style={{ backgroundImage: "url('/img/footer-bg.png')" }}
            >
              <Image
                className="object-cover h-full hidden"
                src="/img/footer-bg.png"
                fill
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary w-full">
        <div className="container ">
          <div className="justify-between flex text-xs py-2 screen-">
            <div className="text-white">
              (C) 2016 Your Company, All right reserved
            </div>
            <div className="text-white flex gap-x-2">
              <a href="">Home</a>
              <a href="">Listing</a>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
