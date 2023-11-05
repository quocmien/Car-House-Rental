import { Check } from 'lucide-react';

const ITEMS = [
  'wifi',
  'paking',
  'TV',
  'alcohol',
  'vegetarian',
  'take-out',
  'balcony',
];

const Features = () => {
  return (
    <section className="block-section">
      <h2 className="text-[26px] text-primary font-light mb-5">
        About this listing
      </h2>
      <div className="flex flex-wrap gap-[5px]">
        {ITEMS.map((item, index) => (
          <div
            key={index}
            className="flex flex-nowrap items-center px-[10px] py-[5px] shadow-md bg-[#fafafa]"
          >
            <Check
              strokeWidth={5}
              className="w-[10px] h-[10px] text-primary mr-[3px]"
            />
            <div className="uppercase text-[10px] text-[#000000cc]">{item}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
