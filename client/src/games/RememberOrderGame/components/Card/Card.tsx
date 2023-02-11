/* eslint-disable no-nested-ternary */
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, useState } from "react";
import cn from "classnames";
import { CardInterface } from "../types/types";
import styles from "./Card.module.scss";

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  card: CardInterface;
  clickHandler: (card: CardInterface) => void;
  solved?: boolean;
  error?: boolean;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  card,
  clickHandler,
  solved = false,
  error = false,
  ...rest
}) => {
  const [flipped, setFlipped] = useState(false);
  const [mistake, setMistake] = useState(error);
  const [isSolved, setSolved] = useState(solved);
  const handleClick = () => {
    clickHandler(card);
    setFlipped(card.matched);
    setMistake(card.error || false);
    setSolved(card.solved || false);
  };

  return (
    <div
      {...rest}
      role="textbox"
      tabIndex={-1}
      className={
        flipped && card.value
          ? cn(styles.card, styles.card_active, styles.disabled)
          : mistake
          ? cn(styles.card, styles.card_mistake)
          : isSolved
          ? cn(styles.card, styles.card_solved)
          : styles.card
      }
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      {card.value ? card.value : ""}
    </div>
  );
};
