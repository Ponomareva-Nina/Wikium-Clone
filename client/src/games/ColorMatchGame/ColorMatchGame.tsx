import cn from "classnames";
// import { t } from "i18next";
import { FC, PropsWithChildren, useState } from "react";
import { Button } from "../../components/UI";
// import { useTranslation } from "react-i18next";
import styles from "./ColorMatchGame.module.scss";
import { Rules } from "./components/Rules/Rules";
import { LEVEL, LevelNumber } from "./date";

export const ColorMatchGame: FC<PropsWithChildren> = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startLevel = LEVEL[LevelNumber.ONE].level;
  const finishLevel = LEVEL[LevelNumber.THREE].level;
  let currentLevel = startLevel;

  let answers = 0;
  let correctAnswers = 0;
  let correctAnswersSubsequence = 0;
  // const mistakes = 0;

  const handleCorrectAnswers = () => {
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
    console.log("Correct Answers Subsequence: ", correctAnswersSubsequence);
    console.log("Current Level: ", currentLevel);
    console.log("All answers: ", answers);
    console.log("Correct answers: ", correctAnswers);
  };

  const handleErrorAnswers = () => {
    answers += 1;
    correctAnswersSubsequence = 0;
    if (correctAnswers > 0) {
      correctAnswers -= 1;
    } else {
      correctAnswers = 0;
    }

    if (currentLevel > startLevel) {
      currentLevel -= 1;
    }
    console.log("Correct Answers Subsequence: ", correctAnswersSubsequence);
    console.log("Current Level: ", currentLevel);
    console.log("All answers: ", answers);
    console.log("Correct answers: ", correctAnswers);
  };

  const playNext = () => {
    setIsGameStarted(true);
  };

  return (
    <div className={cn(styles.container, styles.wrapper)}>
      <div className={cn(styles.game_container)}>
        {!isGameStarted ? (
          <Rules onClick={playNext} />
        ) : (
          <div>
            <Button onClick={handleCorrectAnswers}>Correct answer</Button>
            <Button onClick={handleErrorAnswers}>Mistake</Button>
          </div>
        )}
      </div>
    </div>
  );
};

// {LEVEL.map((item) => {
//   // console.log(t(item.words[0]));
//   return item.words.map((word) => t(word));
// })}
