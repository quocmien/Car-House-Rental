import { Facebook, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full mt-[30px] border-t">
      <div className="block">
        <div className="container  ">
          <div className="md:ml-auto w-full justify-between md:justify-end flex first-letter:gap-x-2 text-muted-foreground text-xs">
            <div className="flex-1 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              aliquam at neque sit amet vestibulum. Terms of Use and Privacy
              Policy.
            </div>
            <div className="flex items-center flex-1 gap-x-2 justify-end">
              <a href="">
                <Twitter className="w-7 h-7 p-1 text-primary border-2 border-[#0000001a] hover:border-[#00000033] rounded-full" />
              </a>
              <a href="">
                <Facebook className="w-7 h-7 p-1 text-primary border-2 border-[#0000001a] hover:border-[#00000033] rounded-full" />
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

      <div className="container md:ml-auto w-full justify-between md:justify-end flex first-letter:gap-x-2 text-muted-foreground text-xs py-2 bg-primary">
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
  );
};

export default Footer;
