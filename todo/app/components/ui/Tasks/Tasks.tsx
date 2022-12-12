import { useEffect, useState } from "react";
import Info from "../Info/Info";
import TodoList from "../TodoList/TodoList";

const Tasks = ({ todoList, remove, check }) => {
  return (
    <>
      <Info todoList={todoList} />
      <TodoList check={check} remove={remove} todoList={todoList} />
    </>
  );
};

export default Tasks;
