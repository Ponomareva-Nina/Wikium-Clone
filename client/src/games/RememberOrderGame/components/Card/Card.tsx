import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";
import { CardInterface } from "../types/types";
import styles from "./Card.module.scss";

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  card: CardInterface;
  flipped: boolean;
  clickHandler: (card: CardInterface) => void;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  card,
  flipped,
  clickHandler,
  ...rest
}) => {
  const handleClick = () => {
    clickHandler(card);
  };

  return (
    <div
      {...rest}
      role="textbox"
      tabIndex={-1}
      className={flipped ? cn(styles.card, styles.card_active, styles.disabled) : styles.card}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      {card.value ? card.value : ""}
    </div>
  );
};
