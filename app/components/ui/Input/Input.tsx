import { InputProps } from "./Input.props";

const Input = ({ ...props }: InputProps) => {
  return (
    <input
      {...props}
      placeholder="Adicione uma nova tarefa"
      className="bg-[#262626] w-full max-w-[638px] h-[56px] p-[16px] 
      border border-[#0D0D0D] rounded-[8px] text-[#808080] 
      placeholder-[#808080]"
    />
  );
};

export default Input;
