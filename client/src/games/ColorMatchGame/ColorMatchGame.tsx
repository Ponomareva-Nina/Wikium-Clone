import cn from "classnames";
import { FC, PropsWithChildren, useState } from "react";
import { ScreenSaver } from "../../components/UI/ScreenSaver/ScreenSaver";
import styles from "./ColorMatchGame.module.scss";
import { GameField } from "./components/GameField/GameField";
import { Rules } from "./components/Rules/Rules";
import { LEVEL, LevelNumber } from "./data";
import img from "./images/color-match-bg.png";

export const ColorMatchGame: FC<PropsWithChildren> = () => {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  const startLevel = LEVEL[LevelNumber.ONE].level;
  const finishLevel = LEVEL[LevelNumber.THREE].level;

  let answers = 0;
  let correctAnswers = 0;
  let correctAnswersSubsequence = 0;
  let currentLevel = startLevel;

  const handleCorrectAnswers = (): void => {
    answers += 1;
    correctAnswers += 1;
    correctAnswersSubsequence += 1;
    if (currentLevel === startLevel && correctAnswersSubsequence === 3) {
      currentLevel += 1;
      correctAnswersSubsequence = 0;
    }
    if (
      currentLevel > startLevel &&
      currentLevel < finishLevel &&
      correctAnswersSubsequence % 10 === 0 &&
      correctAnswersSubsequence !== 0
    ) {
      currentLevel += 1;
    }
    console.log("CORRECT Correct Answers Subsequence: ", correctAnswersSubsequence);
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
      currentLevel -= 1;
    } else {
      currentLevel = startLevel;
    }
    console.log("ERROR Correct Answers Subsequence: ", correctAnswersSubsequence);
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
        <Rules
          onClick={() => {
            playNext();
          }}
          isGameStarted={isGameStarted}
        />
        {isGameStarted && (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {count <= 3 ? (
              <ScreenSaver count={count} setCount={setCount}>
                {img}
              </ScreenSaver>
            ) : (
              <GameField
                currentLevel={currentLevel}
                handleCorrectAnswers={handleCorrectAnswers}
                handleErrorAnswers={handleErrorAnswers}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
