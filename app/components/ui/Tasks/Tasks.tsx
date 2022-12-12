import Info from "../Info/Info";
import TodoList from "../TodoList/TodoList";
import { TasksProps } from "./Tasks.props";

const Tasks = ({ todoList, remove, check }:TasksProps) => {
  return (
    <>
      <Info todoList={todoList} />
      <TodoList check={check} remove={remove} todoList={todoList} />
    </>
  );
};

export default Tasks;
