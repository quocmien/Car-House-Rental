import { LucideIcon } from 'lucide-react';

export type ItemBrowse = {
  id?: string;
  attributes: {
    name: string;
    value: string | number;
  };
};

interface Props {
  title: string;
  icon: LucideIcon | string;
  items: ItemBrowse[];
}

const BrowseItem = ({ title, icon: Icon, items }: Props) => {
  return (
    <div>
      <div className="mb-[10px] flex sm:flex-col lg:flex-row sm:items-start items-center lg:items-center">
        <div className="w-10 h-10 rounded-full text-white flex justify-center items-center bg-primary mr-[10px]">
          {!!Icon && (
            <Icon strokeWidth={3} className="fill-white w-[14px] h-[14px]" />
          )}
        </div>
        <h3 className="text-[18px] text-primary">{title}</h3>
      </div>
      <ul className="pl-[52px] sm:pl-0">
        {items?.map((item, idx) => {
          const child = item?.attributes;
          return (
            <li
              key={item?.id}
              className="text-[10px] flex justify-between items-center mb-[10px]"
            >
              <div>{child?.name}</div>
              <div>{child?.value}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BrowseItem;
