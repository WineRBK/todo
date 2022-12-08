import { useState } from "react";
import ClipboardIcon from "./Clipboard.svg";

const TodoList = (todoItem) => {
  

  return (
    <div className="mt-[25px] border-t-[1px] rounded-[8px] border-[#333333]">
      {todoItem.length == 0 && (
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
    </div>
  );
};

export default TodoList;
