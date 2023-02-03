import {
  DetailedHTMLProps,
  FC,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: HTMLInputTypeAttribute;
  appearance?: "normal" | "success" | "error";
}

export const Input: FC<PropsWithChildren<InputProps>> = ({
  appearance = "normal",
  type = "text",
  ...rest
}) => {
  return <input {...rest} type={type} className={cn(styles[appearance])} />;
};
