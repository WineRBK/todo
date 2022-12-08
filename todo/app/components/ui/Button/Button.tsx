import { useEffect, useState } from "react";
import { ButtonProps } from "./Button.props";
import AddIcon from "./plus.svg";

const Button = ({ itemText, addItem }, { children, svg }: ButtonProps) => {
  const [todoItems, setTodoItems] = useState<string[]>([]);

  useEffect(() => {
    addItem(todoItems);
  }, [todoItems]);

  return (
    <button
      className="flex item-center bg-[#1E6F9F] text-white p-[16px] 
    rounded-[8px] gap-[8px]"
      onClick={() => setTodoItems([...todoItems, itemText])}
    >
      {children}
      {svg !== "none" && (
        <span className="my-auto">
          <AddIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
