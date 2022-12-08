import { ButtonProps } from "./Button.props";
import AddIcon from "./plus.svg";

const Button = ({ children, svg }: ButtonProps) => {
  return (
    <button
      className="flex item-center bg-[#1E6F9F] text-white p-[16px] 
    rounded-[8px] gap-[8px]"
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
