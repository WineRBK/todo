import Item from "../Item/Item";
import ClipboardIcon from "./Clipboard.svg";
import cn from "classnames";

import { TodoListProps } from "./TodoList.props";

const TodoList = ({ todoItems }: TodoListProps) => {
  return (
    <div
      className={cn("mt-[25px] border-t-[1px] rounded-[8px] border-[#333333]", {
        "border-none": todoItems.length != 0,
      })}
    >
      {todoItems.length == 0 && (
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
        {todoItems.map((el, index) => (
          <Item text={el} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
