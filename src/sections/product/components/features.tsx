import { Check } from 'lucide-react';
import { Key } from 'react';

const ITEMS = [
  'wifi',
  'paking',
  'TV',
  'alcohol',
  'vegetarian',
  'take-out',
  'balcony',
];

interface IProps {
  benefits: any;
}

const Features = ({ benefits }: IProps) => {
  return (
    <section className="block-section">
      <h2 className="text-[26px] text-primary font-light mb-5">Benefits</h2>
      <div className="flex flex-wrap gap-[5px]">
        {benefits.map(
          (benefit: { attributes: any; id: Key | null | undefined }) => {
            const attribute = benefit?.attributes;
            return (
              <div
                key={benefit?.id}
                className="flex flex-nowrap items-center px-[10px] py-[5px] shadow-md bg-[#fafafa]"
              >
                <Check
                  strokeWidth={5}
                  className="w-[10px] h-[10px] text-primary mr-[3px]"
                />
                <div className="uppercase text-[10px] text-[#000000cc]">
                  {attribute.name}
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Features;
