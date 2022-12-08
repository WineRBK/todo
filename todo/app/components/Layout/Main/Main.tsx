import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import Tasks from "../../ui/Tasks/Tasks";
import { useEffect, useState } from "react";

const Main = () => {
  const [itemText, setItemText] = useState<string>("");
  const [todoItems, setTodoItems] = useState([]);

  const handleTextChange = (text: string) => {
    setItemText(text);
  };

  const handleTodoItems = (item) => {
    setTodoItems(item);
  };

  return (
    <main className="w-screen">
      <div className="mx-auto max-w-[736px]">
        <div className="flex gap-[8px] mt-[-27px]">
          <Input onChange={handleTextChange} />
          <Button addItem={handleTodoItems} itemText={itemText} svg="plus">
            Criar
          </Button>
        </div>
        <Tasks todoItems={todoItems} />
      </div>
    </main>
  );
};

export default Main;
