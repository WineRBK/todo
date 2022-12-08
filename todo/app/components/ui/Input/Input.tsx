import { useEffect, useState } from "react";

const Input = ({ onChange }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <input
      type="text"
      placeholder="Adicione uma nova tarefa"
      className="bg-[#262626] w-full max-w-[638px] h-[56px] p-[16px] 
      border border-[#0D0D0D] rounded-[8px] text-[#808080] 
      placeholder-[#808080]"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
