import { useEffect, useRef, useState } from "react";
import { useCounter } from "../../../../../hooks/useCounter";
import { getRandomExpressionsByLevel } from "../../../utils/randomizer.util";
import { ControlPanel } from "./ControlPanel/ControlPanel";
import { ExpressionCard } from "./ExpressionCard/ExpressionCard";
import styles from "./GameField.module.scss";
import { TopPanel } from "./TopPanel/TopPanel";
import CorrectIcon from "../../../../../assets/images/LessOrMoreIcons/correct.svg";
import IncorrectIcon from "../../../../../assets/images/LessOrMoreIcons/incorrect.svg";

const checkIcons = {
  correct: CorrectIcon,
  incorrect: IncorrectIcon,
};
interface Expressions {
  left: string;
  right: string;
}

const initialExpressionsValue: Expressions = {
  left: "",
  right: "",
};

export const GameField = () => {
  const timer = useCounter({ isReverse: true, initialValue: 60 });
  const [level, setLevel] = useState<number>(1);

  const [expressions, setExpressions] = useState<Expressions>(initialExpressionsValue);
  const [answerCheck, setAnswerCheck] = useState<"correct" | "incorrect" | null>(null);
  const correctAnswerRef = useRef<string>("");
  const correctAnswerCountRef = useRef<number>(0);
  const answerCountRef = useRef<number>(0);
  const timeoutIdRef = useRef<NodeJS.Timer | null>(null);

  const setAnswerHandler = (answer: "left" | "equal" | "right") => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    if (answer === correctAnswerRef.current) {
      correctAnswerCountRef.current += 1;
      setAnswerCheck("correct");
    } else {
      setAnswerCheck("incorrect");
    }

    timeoutIdRef.current = setTimeout(() => {
      setAnswerCheck(null);
    }, 500);

    answerCountRef.current += 1;

    const gameData = getRandomExpressionsByLevel(level);
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
      <TopPanel timer={timer} />
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
