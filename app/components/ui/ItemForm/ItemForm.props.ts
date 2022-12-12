import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ItemFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  create: Function;
}
