import CheckIcon from "./Check.svg";
import TrashIcon from "./Trash.svg";
import cn from "classnames";
import { ItemProps } from "./Item.props";

const Item = ({ check, remove, item }: ItemProps) => {
  console.log(item);
  return (
    <li
      className="flex gap-[12px] bg-[#262626] px-[16px] py-[16px] rounded-[8px]
       border border-[#333333] mb-[12px]"
    >
      <button
        onClick={() => {
          check(item);
        }}
        className={cn(
          "border-[2px] my-auto border-[#1E6F9F] w-[24px] h-[24px] rounded-[999px] p-[4px]",
          {
            "border-[#5E60CE] bg-[#5E60CE]": item.isChecked == true,
          }
        )}
      >
        <CheckIcon
          className={cn("mt-[3px] ml-[1px] opacity-0", {
            "opacity-100": item.isChecked == true,
          })}
        />
      </button>
      <span
        className={cn("text-[#F2F2F2] flex-1", {
          "text-[#808080] line-through": item.isChecked == true,
        })}
      >
        {item.text}
      </span>
      <span className="w-[24px] h-[24px] my-auto">
        <button onClick={() => remove(item)}>
          <TrashIcon className="cursor" />
        </button>
      </span>
    </li>
  );
};

export default Item;
