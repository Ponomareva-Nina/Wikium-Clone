import { FC, PropsWithChildren, useState } from "react";
import cn from "classnames";
import { GameResults } from "../../../../components";
import { GameInfoPanel } from "../../../../components/GameInfoPanel/GameInfoPanel";
import { useCounter } from "../../../../hooks/useCounter";
import { LEVEL, LevelNumber } from "../../data";
import { GameValues, LevelUpValues } from "../../types/types";
import { GameField } from "../GameField/GameField";
import styles from "./Game.module.scss";

interface GameProps {
  setIsGameStarted?: (value: boolean) => void;
}

export const Game: FC<PropsWithChildren<GameProps>> = ({ setIsGameStarted }) => {
  const startLevel = LEVEL[LevelNumber.ONE].level;
  const finishLevel = LEVEL[LevelNumber.THREE].level;
  const [isGameFinished, setIsGameFinished] = useState(false);

  const [points, setPoints] = useState<number>(GameValues.INITIAL_GAME_VALUES);
  const [answers, setAnswers] = useState<number>(GameValues.INITIAL_GAME_VALUES);
  const [correctAnswers, setCorrectAnswers] = useState<number>(GameValues.INITIAL_GAME_VALUES);
  const [correctAnswersSubsequence, setCorrectAnswersSubsequence] = useState<number>(
    GameValues.INITIAL_GAME_VALUES
  );
  const [currentLevel, setCurrentLevel] = useState(startLevel);
  const timer = useCounter({ isReverse: true, initialValue: 60 });

  const endGame = () => {
    setIsGameFinished(true);
  };

  const isSetLevelTwo =
    currentLevel === startLevel && correctAnswersSubsequence === LevelUpValues.TO_LEVEL_TWO;

  const isMidleLevel = currentLevel > startLevel && currentLevel < finishLevel;

  const isSetLevelUp =
    correctAnswersSubsequence % LevelUpValues.TO_LEVEL_THREE === GameValues.INITIAL_GAME_VALUES &&
    correctAnswersSubsequence !== GameValues.INITIAL_GAME_VALUES;

  const handleCorrectAnswers = (): void => {
    setAnswers(answers + 1);
    setCorrectAnswersSubsequence((prev) => prev + 1);
    setCorrectAnswers(correctAnswers + 1);
    setPoints((prev) => prev + LEVEL[currentLevel - 1].points * currentLevel);
    if (isSetLevelTwo && correctAnswers) {
      setCurrentLevel((prev) => prev + 1);
      setCorrectAnswersSubsequence(GameValues.INITIAL_GAME_VALUES);
    }
    if (isMidleLevel && isSetLevelUp && correctAnswers) {
      setCurrentLevel((prev) => prev + 1);
    }
    if (timer.count === 0) endGame();
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
    if (timer.count === 0) endGame();
  };

  const startNewGame = () => {
    if (setIsGameStarted) setIsGameStarted(false);
    setIsGameFinished(false);
    setPoints(GameValues.INITIAL_GAME_VALUES);
    setAnswers(GameValues.INITIAL_GAME_VALUES);
    setCorrectAnswers(GameValues.INITIAL_GAME_VALUES);
    setCorrectAnswersSubsequence(GameValues.INITIAL_GAME_VALUES);
    setCurrentLevel(startLevel);
    timer.reset();
  };

  return !isGameFinished ? (
    <>
      <GameInfoPanel
        timer={timer.count}
        currentLevel={currentLevel}
        maxLevel={finishLevel}
        score={points}
        mistakes={false}
        bonus={false}
      />
      <GameField
        currentLevel={currentLevel}
        handleCorrectAnswers={handleCorrectAnswers}
        handleErrorAnswers={handleErrorAnswers}
      />
    </>
  ) : (
    <div className={cn(styles.result_container)}>
      <GameResults
        correctAnswers={correctAnswers}
        mistakes={answers - correctAnswers}
        score={points}
        neurons={points / LEVEL[currentLevel].pointsOneNeuron}
        newGameHandler={startNewGame}
      />
    </div>
  );
};
