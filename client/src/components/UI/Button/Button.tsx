import cn from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  btnSize?: "small" | "standart" | "large";
  appearance?: "normal" | "inactive";
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  btnSize = "standart",
  appearance = "normal",
  ...rest
}) => {
  return (
    <button {...rest} className={cn(styles.btn, styles[btnSize], styles[appearance])} type="submit">
      {children}
    </button>
  );
};
