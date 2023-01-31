import cn from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import { ClassNames } from "../../../constants/classNames";

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  btnSize: ClassNames.BTN_SMALL | ClassNames.BTN_STANDART;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ btnSize, children, ...rest }) => {
  return (
    <button {...rest} className={cn(styles[ClassNames.BTN], styles[btnSize])} type="button">
      {children}
    </button>
  );
};
