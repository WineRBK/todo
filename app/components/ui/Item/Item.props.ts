import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { IItemForm } from "../ItemForm/ItemForm.Interface";

export interface ItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    item: IItemForm;
    remove: Function;
    check: Function;
}
