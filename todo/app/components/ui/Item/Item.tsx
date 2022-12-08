import CheckIcon from "./Check.svg";
import { ItemProps } from "./Item.props";
import TrashIcon from "./Trash.svg";

const Item = ({ text }: ItemProps) => {
  return (
    <li
      className="flex gap-[12px] bg-[#262626] px-[16px] py-[16px] rounded-[8px]
       border border-[#333333] mb-[12px]"
    >
      <span className="border-[2px] my-auto border-[#1E6F9F] w-[24px] h-[24px] rounded-[999px] p-[4px]">
        <CheckIcon className="mt-[3px] ml-[1px]" />
      </span>
      <span className="text-[#F2F2F2] flex-1">{text}</span>
      <span className="w-[24px] h-[24px] my-auto">
        <TrashIcon />
      </span>
    </li>
  );
};

export default Item;
