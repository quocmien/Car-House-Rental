import { Check } from 'lucide-react';

interface IProps {
  variants: any;
}

const Features = ({ variants }: IProps) => {
  return (
    variants.length > 0 && (
      <section className="block-section">
        <h2 className="text-[26px] text-primary font-light mb-5">Variants</h2>
        <div className="flex flex-wrap gap-[5px]">
          {variants.map((variant: any, index: number) => {
            return (
              <div
                key={index}
                className="flex flex-nowrap items-center px-[10px] py-[5px] shadow-md bg-[#fafafa]"
              >
                <Check
                  strokeWidth={5}
                  className="w-[10px] h-[10px] text-primary mr-[3px]"
                />
                <div className="uppercase text-[10px] text-[#000000cc]">
                  {variant.name}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    )
  );
};

export default Features;
