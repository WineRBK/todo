import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { IItemForm } from "./ItemForm.Interface";
import { ItemFormProps } from "./ItemForm.props";

const ItemForm = ({ create }: ItemFormProps) => {
  const [text, setText] = useState("");

  const addNewItem = (e: React.MouseEvent) => {
    console.log(e);
    e.preventDefault();
    if (text !== "") {
      const newItem: IItemForm = {
        id: Date.now(),
        text,
        isChecked: false,
      };
      create(newItem);
      setText("");
    } else {
      console.log("Введите текст");
    }
  };

  return (
    <form className="flex gap-[8px] mt-[-27px]">
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button type="submit" svg="plus" onClick={addNewItem}>
        Ciar
      </Button>
    </form>
  );
};

export default ItemForm;
