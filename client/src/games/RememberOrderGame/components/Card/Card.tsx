/* eslint-disable no-nested-ternary */
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";
import { CardInterface } from "../types/types";
import styles from "./Card.module.scss";

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  card: CardInterface;
  clickHandler: (card: CardInterface) => void;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({ card, clickHandler, ...rest }) => {
  const handleClick = () => {
    clickHandler(card);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      {...rest}
      role="button"
      tabIndex={-1}
      className={cn(styles.card, {
        [styles.card_active]: card.value && card.matched,
        [styles.disabled]: card.matched || card.disabled,
        [styles.card_mistake]: card.error,
        [styles.card_solved]: card.solved,
      })}
      onClick={handleClick}
    >
      {card.value && (card.matched || card.error) ? card.value : ""}
    </div>
  );
};
