import cn from "classnames";
import { FC, PropsWithChildren, useState } from "react";
import { ScreenSaver } from "../../components/UI/ScreenSaver/ScreenSaver";
import styles from "./ColorMatchGame.module.scss";
import { GameField } from "./components/GameField/GameField";
import { InfoPanel } from "./components/InfoPanel/InfoPanel";
import { Rules } from "./components/Rules/Rules";
import { LEVEL, LevelNumber } from "./data";
import img from "./images/color-match-bg.png";

export const ColorMatchGame: FC<PropsWithChildren> = () => {
  const startLevel = LEVEL[LevelNumber.ONE].level;
  const finishLevel = LEVEL[LevelNumber.THREE].level;

  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const [points, setPoints] = useState<number>(0);
  const [answers, setAnswers] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [correctAnswersSubsequence, setCorrectAnswersSubsequence] = useState<number>(0);
  const [currentLevel, setCurrentLevel] = useState(startLevel);

  console.log("count", count);
  console.log("points", points);
  console.log("answers", answers);
  console.log("correctAnswers", correctAnswers);
  console.log("correctAnswersSubsequence", correctAnswersSubsequence);
  console.log("currentLevel", currentLevel);

  const timer = 1;

  const handleCorrectAnswers = (): void => {
    setAnswers(answers + 1);
    setCorrectAnswers(correctAnswers + 1);
    setPoints(points + LEVEL[currentLevel - 1].points * currentLevel);
    setCorrectAnswersSubsequence(correctAnswersSubsequence + 1);
    if (currentLevel === startLevel && correctAnswersSubsequence === 3) {
      setCurrentLevel(currentLevel + 1);
      setCorrectAnswersSubsequence(0);
    }
    if (
      currentLevel > startLevel &&
      currentLevel < finishLevel &&
      correctAnswersSubsequence % 10 === 0 &&
      correctAnswersSubsequence !== 0
    ) {
      setCurrentLevel(currentLevel + 1);
    }
    // console.log("CORRECT Correct Answers Subsequence: ", correctAnswersSubsequence);
    // console.log("Current Level: ", currentLevel);
    // console.log("All answers: ", answers);
    // console.log("Correct answers: ", correctAnswers);
    // console.log("Points: ", points, "Neurons: ", points / 20);
  };

  const handleErrorAnswers = (): void => {
    setAnswers(answers + 1);
    setCorrectAnswersSubsequence(0);

    if (points > 0) {
      setPoints(points - LEVEL[currentLevel - 1].points * currentLevel);
    } else {
      setPoints(0);
    }

    if (correctAnswers > 0) {
      setCorrectAnswers(correctAnswers - 1);
    } else {
      setCorrectAnswers(0);
    }

    if (currentLevel > startLevel) {
      setCurrentLevel(currentLevel - 1);
    } else {
      setCurrentLevel(startLevel);
    }
    // console.log("ERROR Correct Answers Subsequence: ", correctAnswersSubsequence);
    // console.log("Current Level: ", currentLevel);
    // console.log("All answers: ", answers);
    // console.log("Correct answers: ", correctAnswers);
    // console.log("Points: ", points, "Neurons: ", points / 20);
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
              <>
                <InfoPanel timer={timer} currentLevel={currentLevel} points={points} />
                <GameField
                  currentLevel={currentLevel}
                  handleCorrectAnswers={handleCorrectAnswers}
                  handleErrorAnswers={handleErrorAnswers}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
