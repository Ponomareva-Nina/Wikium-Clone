import { useState } from "react";
import { useCounter } from "../../../../hooks/useCouner";
import { LEVEL, LevelNumber } from "../../data";
import { GameValues, LevelUpValues } from "../../types/types";
import { GameField } from "../GameField/GameField";
import { InfoPanel } from "../InfoPanel/InfoPanel";

export const Game = () => {
  const startLevel = LEVEL[LevelNumber.ONE].level;
  const finishLevel = LEVEL[LevelNumber.THREE].level;

  const [points, setPoints] = useState<number>(GameValues.INITIAL_GAME_VALUES);
  const [answers, setAnswers] = useState<number>(GameValues.INITIAL_GAME_VALUES);
  const [correctAnswers, setCorrectAnswers] = useState<number>(GameValues.INITIAL_GAME_VALUES);
  const [correctAnswersSubsequence, setCorrectAnswersSubsequence] = useState<number>(
    GameValues.INITIAL_GAME_VALUES
  );
  const [currentLevel, setCurrentLevel] = useState(startLevel);
  const timer = useCounter({ isReverse: true, initialValue: 60 });

  const handleCorrectAnswers = (): void => {
    setAnswers(answers + 1);
    setCorrectAnswersSubsequence((prev) => prev + 1);
    setCorrectAnswers(correctAnswers + 1);
    setPoints((prev) => prev + LEVEL[currentLevel - 1].points * currentLevel);
    if (
      currentLevel === startLevel &&
      correctAnswersSubsequence === LevelUpValues.TO_LEVEL_TWO &&
      correctAnswers
    ) {
      setCurrentLevel((prev) => prev + 1);
      setCorrectAnswersSubsequence(GameValues.INITIAL_GAME_VALUES);
    }
    if (
      currentLevel > startLevel &&
      currentLevel < finishLevel &&
      correctAnswersSubsequence % LevelUpValues.TO_LEVEL_THREE === GameValues.INITIAL_GAME_VALUES &&
      correctAnswers &&
      correctAnswersSubsequence !== GameValues.INITIAL_GAME_VALUES
    ) {
      setCurrentLevel((prev) => prev + 1);
    }
  };

  const handleErrorAnswers = (): void => {
    setAnswers((prev) => prev + 1);
    setCorrectAnswersSubsequence(GameValues.INITIAL_GAME_VALUES);

    if (points > 0) {
      setPoints((prev) => prev - LEVEL[currentLevel - 1].points * currentLevel);
    } else {
      setPoints(GameValues.INITIAL_GAME_VALUES);
    }

    if (currentLevel > startLevel) {
      setCurrentLevel((prev) => prev - 1);
    } else {
      setCurrentLevel(startLevel);
    }
  };

  return (
    <>
      <InfoPanel timer={timer} currentLevel={currentLevel} points={points} />
      <GameField
        currentLevel={currentLevel}
        handleCorrectAnswers={handleCorrectAnswers}
        handleErrorAnswers={handleErrorAnswers}
      />
    </>
  );
};
