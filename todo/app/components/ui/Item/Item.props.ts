import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  todoItem: JSX.Element[];
  text: string
}
