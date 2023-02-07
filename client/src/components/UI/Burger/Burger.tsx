import cn from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from "react";
import styles from "./Burger.module.scss";

interface BurgerProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isOpen: boolean;
  onClick: () => void;
}

export const Burger: FC<PropsWithChildren<BurgerProps>> = ({ onClick, isOpen }: BurgerProps) => {
  return (
    <button className={cn(styles.burger_logo)} onClick={onClick} type="button">
      <span className={cn(styles.burger_line, isOpen && styles.burger_line__open)}> </span>
    </button>
  );
};
