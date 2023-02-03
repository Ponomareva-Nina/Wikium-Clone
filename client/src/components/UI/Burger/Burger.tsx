import cn from "classnames";
import styles from "./Burger.module.scss";

type BurgerProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const Burger = ({ onClick, isOpen }: BurgerProps) => {
  return (
    <button className={cn(styles.burger_logo)} onClick={onClick} type="button">
      <span className={cn(styles.burger_line, isOpen && styles.burger_line__open)}> </span>
    </button>
  );
};
