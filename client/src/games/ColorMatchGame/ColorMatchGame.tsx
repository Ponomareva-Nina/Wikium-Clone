import cn from "classnames";
import { FC, PropsWithChildren, useState } from "react";
import { Button } from "../../components/UI";
import styles from "./ColorMatchGame.module.scss";
import { GameField } from "./components/GameField/GameField";
import { Rules } from "./components/Rules/Rules";
import { LEVEL, LevelNumber } from "./data";

export const ColorMatchGame: FC<PropsWithChildren> = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startLevel = LEVEL[LevelNumber.ONE].level;
  const finishLevel = LEVEL[LevelNumber.THREE].level;
  // eslint-disable-next-line prefer-const
  let [currentLevel, setCurrentLevel] = useState(startLevel);

  let answers = 0;
  let correctAnswers = 0;
  let correctAnswersSubsequence = 0;

  const handleCorrectAnswers = (): void => {
    answers += 1;
    correctAnswers += 1;
    correctAnswersSubsequence += 1;
    if (currentLevel === startLevel && correctAnswersSubsequence === 3) {
      setCurrentLevel((currentLevel += 1));
      correctAnswersSubsequence = 0;
    }
    if (
      currentLevel > startLevel &&
      currentLevel < finishLevel &&
      correctAnswersSubsequence % 10 === 0 &&
      correctAnswersSubsequence !== 0
    ) {
      setCurrentLevel((currentLevel += 1));
    }
    console.log("Correct Answers Subsequence: ", correctAnswersSubsequence);
    console.log("Current Level: ", currentLevel);
    console.log("All answers: ", answers);
    console.log("Correct answers: ", correctAnswers);
  };

  const handleErrorAnswers = (): void => {
    answers += 1;
    correctAnswersSubsequence = 0;
    if (correctAnswers > 0) {
      correctAnswers -= 1;
    } else {
      correctAnswers = 0;
    }

    if (currentLevel > startLevel) {
      setCurrentLevel((currentLevel -= 1));
    }
    console.log("Correct Answers Subsequence: ", correctAnswersSubsequence);
    console.log("Current Level: ", currentLevel);
    console.log("All answers: ", answers);
    console.log("Correct answers: ", correctAnswers);
  };

  const playNext = (): void => {
    setIsGameStarted(true);
  };

  return (
    <div className={cn(styles.container, styles.wrapper)}>
      <div className={cn(styles.game_container)}>
        <Rules onClick={playNext} isGameStarted={isGameStarted} />
        {isGameStarted && (
          <>
            <GameField currentLevel={currentLevel} />
            <div style={{ display: "flex" }}>
              <Button onClick={handleCorrectAnswers}>Correct answer</Button>
              <Button onClick={handleErrorAnswers}>Mistake</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
