import { IItemForm } from "../ItemForm/ItemForm.Interface";
import { InfoProps } from "./Info.props";

const Info = ({ todoList }: InfoProps) => {
  return (
    <div className="flex justify-between mt-[65px]">
      <div>
        <span className="text-[#4EA8DE] font-bold mr-[8px]">
          Tarefas criadas
        </span>
        <span
          className="bg-[#333333] rounded-[999px] py-[2px] px-[8px]
        text-[#D9D9D9] font-bold text-[12px]"
        >
          {todoList.length}
        </span>
      </div>
      <div>
        <span className="text-[#8284FA] font-bold mr-[8px]">Concluídas</span>
        <span
          className="bg-[#333333] rounded-[999px] py-[2px] px-[8px]
        text-[#D9D9D9] font-bold text-[12px]"
        >
          {todoList.length != 0 && (
            <span>
              {todoList.filter((p: IItemForm) => p.isChecked == true).length} de{" "}
            </span>
          )}
          {todoList.length}
        </span>
      </div>
    </div>
  );
};

export default Info;
