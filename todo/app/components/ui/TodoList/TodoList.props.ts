import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface TodoListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  todoItems: JSX.Element[];
  children: ReactNode;
}
