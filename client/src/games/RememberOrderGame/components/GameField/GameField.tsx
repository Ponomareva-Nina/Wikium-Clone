import { FC, PropsWithChildren } from "react";
import { createCardsArray } from "./utils";
import styles from "./GameField.module.scss";
import { Levels, levelsData } from "../../data";

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
  const levelData = levelsData.find(({ level }) => level === gameLevel) || levelsData[Levels.FIRST];
  const cards = createCardsArray(levelData);
  let currentAnswerNumber = 1;

  function handleClick(e: React.MouseEvent | React.KeyboardEvent) {
    const clickedElement = e.target as HTMLDivElement;
    if (Number(clickedElement.textContent) === currentAnswerNumber) {
      registerCorrectAnswer();
      currentAnswerNumber += 1;
    } else {
      registerMistake();
    }
    clickedElement.classList.add(styles.disabled);
  }

  const templateStyle = {
    gridTemplateColumns: `repeat(${levelData.arrayWidth}, 1fr)`,
    gridTemplateRows: `repeat(${levelData.arrayHeight}, 1fr)`,
  };

  return (
    <div className={styles.cards_container} style={templateStyle}>
      {cards.map((card) => {
        return (
          <div
            key={card.id}
            role="textbox"
            tabIndex={-1}
            onClick={handleClick}
            onKeyDown={handleClick}
            className={styles.card}
          >
            {card.value}
          </div>
        );
      })}
    </div>
  );
};
