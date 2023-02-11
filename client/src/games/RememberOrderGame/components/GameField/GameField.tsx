import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { createCardsArray } from "./utils";
import styles from "./GameField.module.scss";
import { Levels, levelsData } from "../../data";
import { Button } from "../../../../components/UI";
import { Card } from "../Card/Card";
import { CardInterface } from "../types/types";

interface GameFieldProps {
  gameLevel: number;
  registerCorrectAnswer: () => void;
  registerMistake: () => void;
}

export const GameField: FC<PropsWithChildren<GameFieldProps>> = ({
  gameLevel,
  registerCorrectAnswer,
  registerMistake,
}) => {
  const { t } = useTranslation();
  const levelData = levelsData.find(({ level }) => level === gameLevel) || levelsData[Levels.FIRST];
  const cards = createCardsArray(levelData);
  let currentAnswerNumber = 1;

  const handleChoice = (card: CardInterface) => {
    const clickedCard = card;
    if (Number(card.value) === currentAnswerNumber) {
      registerCorrectAnswer();
      currentAnswerNumber += 1;
      clickedCard.matched = true;
    } else {
      registerMistake();
      clickedCard.matched = false;
    }
  };

  const templateStyle = {
    gridTemplateColumns: `repeat(${levelData.arrayWidth}, 1fr)`,
    gridTemplateRows: `repeat(${levelData.arrayHeight}, 1fr)`,
  };

  return (
    <>
      <div className={styles.cards_container} style={templateStyle}>
        {cards.map((card) => {
          return <Card key={card.id} clickHandler={handleChoice} card={card} />;
        })}
      </div>
      <Button appearance="neutral">{t("rememberOrder.rememberedBtn")}</Button>
    </>
  );
};
