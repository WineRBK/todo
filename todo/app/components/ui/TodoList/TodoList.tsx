import Item from "../Item/Item";
import ClipboardIcon from "./Clipboard.svg";
import cn from "classnames";
import { IItemForm } from "../ItemForm/ItemForm.Interface";

const TodoList = ({ todoList, remove, check }) => {
  return (
    <div
      className={cn("mt-[25px] border-t-[1px] rounded-[8px] border-[#333333]", {
        "border-none": todoList.length != 0,
      })}
    >
      {todoList.length == 0 && (
        <div className="mx-auto text-[#808080] text-center">
          <ClipboardIcon className="fill-[#3D3D3D] mx-auto mt-[65px] mb-[16px]" />
          <div className="flex flex-col ">
            <span className="font-bold">
              Você ainda não tem tarefas cadastradas
            </span>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      )}
      <ul>
        {todoList.map((item: IItemForm) => (
          <Item remove={remove} check={check} key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
