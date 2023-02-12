import { useState } from "react";
import { GameField } from "./components/GameField/GameField";
import styles from "./RememberOrder.module.scss";
import { Levels, levelsData } from "./data";
import { RememberOrderRules } from "./components/Rules/Rules";
import { createCardsArray } from "./utils";

const firstLevel = levelsData[Levels.FIRST].level;
const lastLevel = levelsData[Levels.LAST].level;

export const RememberOrderGame = () => {
  const [gameField, setGameField] = useState(<div />);
  const [gameStarted, setGameStarted] = useState(false);
  let currentLevel = firstLevel;
  const [level, setLevel] = useState(currentLevel);
  let currentLevelAnswers = 0;
  const [mistakes, setMistakes] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
  let cards = createCardsArray(levelsData[currentLevel]);

  const registerMistake = () => {
    setMistakes(mistakes + 1);
    if (level > firstLevel) {
      currentLevel += 1;
      setLevel(currentLevel);
    }
    currentLevelAnswers = 0;
    nextField();
    console.log(cards);
  };

  const registerCorectAnswer = () => {
    currentLevelAnswers += 1;
    setTotalAnswers(totalAnswers + 1);
    if (currentLevelAnswers === levelsData[currentLevel].cards) {
      if (level < lastLevel) {
        currentLevel += 1;
        setLevel(currentLevel);
      }
      currentLevelAnswers = 0;
      nextField();
    }
    console.log(cards);
  };

  function nextField() {
    cards = createCardsArray(levelsData[currentLevel]);
    const newGameField = (
      <GameField
        level={levelsData[currentLevel]}
        gameCards={cards}
        registerCorrectAnswer={registerCorectAnswer}
        registerMistake={registerMistake}
      />
    );
    setGameField(newGameField);
  }

  const startGame = () => {
    setGameStarted(true);
    const newGameField = (
      <GameField
        level={levelsData[currentLevel]}
        gameCards={cards}
        registerCorrectAnswer={registerCorectAnswer}
        registerMistake={registerMistake}
      />
    );
    setGameField(newGameField);
  };

  return (
    <div className={styles.game_container}>
      {gameStarted && (
        <div>{`level: ${level}, mistakes: ${mistakes}, answers: ${totalAnswers}`}</div>
      )}
      {!gameStarted && <RememberOrderRules startGameHandler={startGame} />}
      {gameField}
    </div>
  );
};
