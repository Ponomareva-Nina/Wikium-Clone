/* eslint-disable no-nested-ternary */
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, useState } from "react";
import cn from "classnames";
import { CardInterface } from "../types/types";
import styles from "./Card.module.scss";

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  card: CardInterface;
  clickHandler: (card: CardInterface) => void;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({ card, clickHandler, ...rest }) => {
  const [flipped, setFlipped] = useState(card.matched);
  const [mistake, setMistake] = useState(card.error);
  const [isSolved, setSolved] = useState(card.solved);
  const handleClick = () => {
    clickHandler(card);
    setFlipped(card.matched);
    setMistake(card.error);
    setSolved(card.solved);
  };

  return (
    <div
      {...rest}
      role="textbox"
      tabIndex={-1}
      className={
        isSolved
          ? cn(styles.card, styles.card_solved, styles.disabled)
          : flipped && card.value
          ? cn(styles.card, styles.card_active, styles.disabled)
          : flipped
          ? cn(styles.card, styles.disabled)
          : mistake
          ? cn(styles.card, styles.card_mistake)
          : styles.card
      }
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      {flipped && card.value ? card.value : ""}
    </div>
  );
};
