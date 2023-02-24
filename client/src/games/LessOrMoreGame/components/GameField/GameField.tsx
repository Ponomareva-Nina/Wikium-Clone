import { FC, useEffect, useRef, useState } from "react";
import { useCounter } from "../../../../hooks/useCounter";

import { ControlPanel } from "./ControlPanel/ControlPanel";
import { ExpressionCard } from "./ExpressionCard/ExpressionCard";
import { TopPanel } from "./TopPanel/TopPanel";

import {
  MAX_CORRECT_ANSWER,
  COUNT_POINT,
  MIN_CORRECT_ANSWER,
  initialExpressionsValue,
  checkIcons,
} from "../../constants/initial.constants";

import { AnswerVars, Expressions } from "../../types/game-data.interface";

import { getRandomExpressionsByLevel } from "../../utils/randomizer.util";

import styles from "./GameField.module.scss";
import { ResultData } from "../../../../interfaces/GameInterface";
import { SCORE_INITIAL_VALUE } from "../../../../constants/constants";

interface GameFieldProps {
  finishGame: (resultData: ResultData) => void;
}

export const GameField: FC<GameFieldProps> = ({ finishGame }) => {
  const timer = useCounter({ isReverse: true, initialValue: 60 });
  const [level, setLevel] = useState<number>(1);
  const [points, setPoint] = useState<number>(0);
  const [expressions, setExpressions] = useState<Expressions>(initialExpressionsValue);
  const [answerCheck, setAnswerCheck] = useState<"correct" | "incorrect" | null>(null);
  const correctAnswerRef = useRef<string>("");
  const correctAnswerCountRef = useRef<number>(0);
  const answerCountRef = useRef<number>(0);
  const timeoutIdRef = useRef<NodeJS.Timer | null>(null);

  const setAnswerHandler = (answer: AnswerVars) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    if (answer === correctAnswerRef.current) {
      if (correctAnswerCountRef.current < MAX_CORRECT_ANSWER) {
        correctAnswerCountRef.current += 1;
      }
      setPoint((prevValue) => prevValue + level * COUNT_POINT);
      setAnswerCheck("correct");
    } else {
      if (correctAnswerCountRef.current > MIN_CORRECT_ANSWER) {
        correctAnswerCountRef.current -= 1;
      }
      setPoint((prevValue) =>
        prevValue - level * COUNT_POINT > 0 ? prevValue - level * COUNT_POINT : 0
      );
      setAnswerCheck("incorrect");
    }

    timeoutIdRef.current = setTimeout(() => {
      setAnswerCheck(null);
    }, 500);

    answerCountRef.current += 1;

    const newLevel = Math.ceil((correctAnswerCountRef.current + 1) / 5);
    setLevel(newLevel);

    if (timer === 0) {
      const neurons = points / SCORE_INITIAL_VALUE;

      const resultData = {
        correctAnswers: correctAnswerCountRef.current,
        mistakes: answerCountRef.current - correctAnswerCountRef.current,
        score: points,
        neurons,
      };

      finishGame(resultData);
    }

    const gameData = getRandomExpressionsByLevel(newLevel);

    setExpressions({
      left: gameData.left,
      right: gameData.right,
    });

    correctAnswerRef.current = gameData.correctAnswer;
  };

  useEffect(() => {
    const gameData = getRandomExpressionsByLevel(level);
    setExpressions({
      left: gameData.left,
      right: gameData.right,
    });
    correctAnswerRef.current = gameData.correctAnswer;
  }, []);

  return (
    <div className={styles.wrapper}>
      <TopPanel timer={timer} points={points} level={level} />
      <div className={styles.contents}>
        {answerCheck && (
          <img className={styles["check-icon"]} src={checkIcons[answerCheck]} alt="checkIcon" />
        )}
        <div className={styles.expressions}>
          <ExpressionCard value={expressions.left} />
          <ExpressionCard value={expressions.right} />
        </div>
        <ControlPanel setAnswerHandler={setAnswerHandler} />
      </div>
    </div>
  );
};
