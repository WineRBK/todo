import Tasks from "../../ui/Tasks/Tasks";
import {  useState } from "react";
import ItemForm from "../../ui/ItemForm/ItemForm";
import { IItemForm } from "../../ui/ItemForm/ItemForm.Interface";

const Main = () => {
  const [todoList, setTodoList] = useState<IItemForm[]>([]);

  const createItem = (newItem: IItemForm) => {
    setTodoList([...todoList, newItem]);
  };

  const removeItem = (item: IItemForm) => {
    setTodoList(todoList.filter((p) => p.id !== item.id));
  };

  const checkedItem = (item: IItemForm) => {
    const copy = [...todoList];
    const current = copy.find((t) => t.id === item.id);
    if (typeof current !== "undefined") {
      current.isChecked = !current?.isChecked;
      setTodoList(copy);
    }
  };
  
  return (
    <main className="w-screen">
      <div className="mx-auto max-w-[736px]">
        <ItemForm create={createItem} />
        <Tasks check={checkedItem} remove={removeItem} todoList={todoList} />
      </div>
    </main>
  );
};

export default Main;
