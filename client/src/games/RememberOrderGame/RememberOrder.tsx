import { useState } from "react";
import { GameField } from "./components/GameField/GameField";
import styles from "./RememberOrder.module.scss";
import { LEVELS } from "./data";
import { RememberOrderRules } from "./components/Rules/Rules";

const firstLevel = LEVELS[0].level;
const lastLevel = LEVELS[LEVELS.length - 1].level;

export const RememberOrderGame = () => {
  const [gameField, setGameField] = useState(<div />);
  const [gameStarted, setGameStarted] = useState(false);
  let currentLevel = firstLevel;
  let answers = 0;
  let mistakes = 0;

  const registerCorectAnswer = () => {
    answers += 1;
    if (currentLevel < lastLevel) {
      currentLevel += 1;
      console.log(`currentLevel: ${currentLevel}`);
    }
    console.log(answers);
  };

  const registerMistake = () => {
    mistakes += 1;
    if (currentLevel > firstLevel) {
      currentLevel -= 1;
    }
    console.log(mistakes);
  };

  const startGame = () => {
    setGameStarted(true);
    setGameField(
      <GameField
        level={currentLevel}
        registerCorrectAnswer={registerCorectAnswer}
        registerMistake={registerMistake}
      />
    );
  };

  return (
    <div className={styles.game_container}>
      {!gameStarted && <RememberOrderRules startGameHandler={startGame} />}
      {gameField}
    </div>
  );
};