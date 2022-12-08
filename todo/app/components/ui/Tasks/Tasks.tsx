import { useEffect, useState } from "react";
import Info from "../Info/Info";
import TodoList from "../TodoList/TodoList";

const Tasks = ({ todoItems }) => {
  return (
    <>
      <Info todoItems={todoItems} />
      <TodoList todoItems={todoItems} />
    </>
  );
};

export default Tasks;
