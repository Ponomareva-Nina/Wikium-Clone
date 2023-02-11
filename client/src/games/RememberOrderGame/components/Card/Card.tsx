import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, useState } from "react";
import cn from "classnames";
import { CardInterface } from "../types/types";
import styles from "./Card.module.scss";

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  card: CardInterface;
  clickHandler: (card: CardInterface) => void;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({ card, clickHandler, ...rest }) => {
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => {
    clickHandler(card);
    setFlipped(true);
  };

  return (
    <div
      {...rest}
      role="textbox"
      tabIndex={-1}
      className={
        flipped && card.matched ? cn(styles.card, styles.card_active, styles.disabled) : styles.card
      }
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      {card.value ? card.value : ""}
    </div>
  );
};
