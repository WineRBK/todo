import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IItemForm } from "../ItemForm/ItemForm.Interface";

export interface TasksProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  todoList: IItemForm[];
  remove: Function;
  check: Function;
}
