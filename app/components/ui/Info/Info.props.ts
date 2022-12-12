import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IItemForm } from "../ItemForm/ItemForm.Interface";

export interface InfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  todoList: IItemForm[];
}
