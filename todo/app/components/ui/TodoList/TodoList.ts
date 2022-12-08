import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface TodoListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  svg: "add" | "none";
  children: ReactNode;
}
