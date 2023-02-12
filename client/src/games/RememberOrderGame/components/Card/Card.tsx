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
    <div
      {...rest}
      role="textbox"
      tabIndex={-1}
      // className={
      //     ? cn(styles.card, styles.card_solved, styles.disabled)
      //     : flipped && card.value
      //     ? cn(styles.card, styles.card_active, styles.disabled)
      //     : flipped
      //     ? cn(styles.card, styles.disabled)
      //     : mistake
      //     ? cn(styles.card, styles.card_mistake)
      //     : styles.card
      // }
      className={cn(styles.card, {
        [styles.card_active]: card.value && card.matched,
        [styles.disabled]: card.matched,
      })}
      onClick={handleClick}
      onKeyDown={() => {}}
    >
      {card.matched && card.value ? card.value : ""}
    </div>
  );
};
