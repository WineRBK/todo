import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { IItemForm } from "../ItemForm/ItemForm.Interface";

export interface TodoListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  todoList: IItemForm[];
  remove: Function;
  check: Function;
}
