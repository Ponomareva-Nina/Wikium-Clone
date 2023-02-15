/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useCounter } from "../../../../hooks/useCouner";
import { LEVEL, LevelNumber } from "../../data";
import { GameField } from "../GameField/GameField";
import { InfoPanel } from "../InfoPanel/InfoPanel";

export const Game = () => {
  const startLevel = LEVEL[LevelNumber.ONE].level;
  const finishLevel = LEVEL[LevelNumber.THREE].level;

  const [points, setPoints] = useState<number>(0);
  const [answers, setAnswers] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [correctAnswersSubsequence, setCorrectAnswersSubsequence] = useState<number>(0);
  const [currentLevel, setCurrentLevel] = useState(startLevel);
  const timer = useCounter({ isReverse: true, initialValue: 60 });

  const handleCorrectAnswers = (): void => {
    console.log("Correct вызов setAns");
    setAnswers(answers + 1);
    console.log("Correct вызов setAnsSubs");
    setCorrectAnswersSubsequence((prev) => prev + 1);
    console.log("Correct вызов setCorrectAns");
    setCorrectAnswers(correctAnswers + 1);
    setPoints((prev) => prev + LEVEL[currentLevel - 1].points * currentLevel);
    if (currentLevel === startLevel && correctAnswersSubsequence === 3) {
      setCurrentLevel((prev) => prev + 1);
      setCorrectAnswersSubsequence(0);
    }
    if (
      currentLevel > startLevel &&
      currentLevel < finishLevel &&
      correctAnswersSubsequence % 10 === 0 &&
      correctAnswersSubsequence !== 0
    ) {
      setCurrentLevel((prev) => prev + 1);
    }
  };

  const handleErrorAnswers = (): void => {
    console.log("Error вызов setAns");
    setAnswers((prev) => prev + 1);
    console.log("Error вызов setAnsSubs");
    setCorrectAnswersSubsequence(0);

    if (points > 0) {
      setPoints((prev) => prev - LEVEL[currentLevel - 1].points * currentLevel);
    } else {
      setPoints(0);
    }

    if (currentLevel > startLevel) {
      setCurrentLevel((prev) => prev - 1);
    } else {
      setCurrentLevel(startLevel);
    }
  };

  return (
    <>
      <div>
        `startLevel: {startLevel}
        answers: {answers}
        correctAnswers, {correctAnswers}
        correctAnswersSubsequence, {correctAnswersSubsequence}
        currentLevel, {currentLevel}
        points, {points}`
      </div>
      <InfoPanel timer={timer} currentLevel={currentLevel} points={points} />
      <GameField
        currentLevel={currentLevel}
        handleCorrectAnswers={handleCorrectAnswers}
        handleErrorAnswers={handleErrorAnswers}
      />
    </>
  );
};
