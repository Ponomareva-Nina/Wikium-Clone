import cn from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from "react";
import styles from "./AnswerButton.module.scss";

interface AnswerButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  onClick?: () => void;
  left?: boolean;
}

export const AnswerButton: FC<PropsWithChildren<AnswerButtonProps>> = ({
  onClick,
  children,
  left,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(styles.button, left ? styles.left : styles.right)}
    >
      <span className={cn(left ? styles.left : styles.right)}>{children}</span>
      <span className={cn(styles.arrow, left ? styles.arrow_left : styles.arrow_right)} />
    </button>
  );
};
