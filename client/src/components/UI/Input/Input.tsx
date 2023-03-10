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
  value?: string;
  appearance?: "normal" | "success" | "error";
}

export const Input: FC<PropsWithChildren<InputProps>> = ({
  appearance = "normal",
  type = "text",
  value = "",
  ...rest
}) => {
  return (
    <input {...rest} type={type} value={value} className={cn(styles.input, styles[appearance])} />
  );
};
