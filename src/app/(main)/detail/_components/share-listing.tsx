import { Facebook, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const ShareThisListing = () => {
  return (
    <section className="block-detail">
      <h2 className="text-[26px] text-primary font-light mb-5">
        Share This Listing
      </h2>
      <div className="flex gap-1">
        <div className="border rounded-[3px] p-[5px]">
          <Twitter className="fill-[#00aced] text-[#00aced] w-[21px] h-[21px]" />
        </div>
        <div className="border rounded-[3px] p-[5px]">
          <Facebook className="fill-[#3b5998] text-[#3b5998] w-[21px] h-[21px]" />
        </div>
        <div className="border rounded-[3px] p-[5px]">
          <Linkedin className="fill-[#007bb6] text-[#007bb6] w-[21px] h-[21px]" />
        </div>
      </div>
    </section>
  );
};

export default ShareThisListing;
