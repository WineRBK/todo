import { useState } from "react";
import Info from "../Info/Info";
import TodoList from "../TodoList/TodoList";

const Tasks = () => {
  const [todoItem, setTodoItem] = useState<JSX.Element[]>([]);

  return (
    <>
      <Info />
      <TodoList todoItem={todoItem} />
    </>
  );
};

export default Tasks;
