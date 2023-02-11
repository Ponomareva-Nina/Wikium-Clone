import { FC, PropsWithChildren, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./GameField.module.scss";
import { LevelInterface } from "../../data";
import { Button } from "../../../../components/UI";
import { Card } from "../Card/Card";
import { CardInterface } from "../types/types";

interface GameFieldProps {
  gameCards: CardInterface[];
  level: LevelInterface;
  registerCorrectAnswer: () => void;
  registerMistake: () => void;
}

export const GameField: FC<PropsWithChildren<GameFieldProps>> = ({
  gameCards,
  level,
  registerCorrectAnswer,
  registerMistake,
}) => {
  const { t } = useTranslation();
  const [flipped, setFlipped] = useState(true);
  let currentAnswerNumber = 1;

  const handleChoice = (card: CardInterface) => {
    if (Number(card.value) === currentAnswerNumber) {
      registerCorrectAnswer();
      currentAnswerNumber += 1;
      card.matched = true;
      if (Number(card.value) === level.cards) {
        card.solved = true;
      }
    } else {
      registerMistake();
      card.error = true;
    }
  };

  const templateStyle = {
    gridTemplateColumns: `repeat(${level.arrayWidth}, 1fr)`,
    gridTemplateRows: `repeat(${level.arrayHeight}, 1fr)`,
  };

  const hideCards = () => {
    setFlipped(false);
  };

  return (
    <>
      <div className={styles.cards_container} style={templateStyle}>
        {flipped &&
          gameCards.map((card) => {
            card.matched = flipped;
            return <Card key={card.id} clickHandler={handleChoice} card={card} />;
          })}
        {!flipped &&
          gameCards.map((card) => {
            card.matched = false;
            return <Card key={card.id} clickHandler={handleChoice} card={card} />;
          })}
      </div>
      <Button onClick={hideCards} appearance="neutral">
        {t("rememberOrder.rememberedBtn")}
      </Button>
    </>
  );
};
