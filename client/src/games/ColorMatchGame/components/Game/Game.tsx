import { FC, PropsWithChildren, useRef, useState } from "react";
import { GameInfoPanel } from "../../../../components/GameInfoPanel/GameInfoPanel";
import { useCounter } from "../../../../hooks/useCounter";
import { LEVEL, LevelNumber } from "../../data";
import { GameValues, LevelUpValues } from "../../types/types";
import { GameField } from "../GameField/GameField";
import { ResultData } from "../../../../interfaces/GameInterface";

interface GameProps {
  finishGame: (resultData: ResultData) => void;
}

export const Game: FC<PropsWithChildren<GameProps>> = ({ finishGame }) => {
  const startLevel = LEVEL[LevelNumber.ONE].level;
  const finishLevel = LEVEL[LevelNumber.THREE].level;

  const [points, setPoints] = useState<number>(GameValues.INITIAL_GAME_VALUES);
  const answersRef = useRef<number>(GameValues.INITIAL_GAME_VALUES);
  const correctAnswersRef = useRef<number>(GameValues.INITIAL_GAME_VALUES);
  const [correctAnswersSubsequence, setCorrectAnswersSubsequence] = useState<number>(
    GameValues.INITIAL_GAME_VALUES
  );
  const [currentLevel, setCurrentLevel] = useState(startLevel);
  const timer = useCounter({ isReverse: true, initialValue: 60 });

  const isSetLevelTwo =
    currentLevel === startLevel && correctAnswersSubsequence === LevelUpValues.TO_LEVEL_TWO;

  const isMidleLevel = currentLevel > startLevel && currentLevel < finishLevel;

  const isSetLevelUp =
    correctAnswersSubsequence % LevelUpValues.TO_LEVEL_THREE === GameValues.INITIAL_GAME_VALUES &&
    correctAnswersSubsequence !== GameValues.INITIAL_GAME_VALUES;

  const endGame = () => {
    if (timer === 0) {
      const correctAnswers = correctAnswersRef.current;
      finishGame({
        correctAnswers,
        mistakes: answersRef.current - correctAnswersRef.current,
        score: points,
        neurons: points / LEVEL[currentLevel - 1].pointsOneNeuron,
      });
    }
  };

  const handleCorrectAnswers = (): void => {
    answersRef.current += 1;
    setCorrectAnswersSubsequence((prev) => prev + 1);
    correctAnswersRef.current += 1;
    setPoints((prev) => prev + LEVEL[currentLevel - 1].points * currentLevel);
    if (isSetLevelTwo && correctAnswersRef.current) {
      setCurrentLevel((prev) => prev + 1);
      setCorrectAnswersSubsequence(GameValues.INITIAL_GAME_VALUES);
    }
    if (isMidleLevel && isSetLevelUp && correctAnswersRef.current) {
      setCurrentLevel((prev) => prev + 1);
    }
    endGame();
  };

  const handleErrorAnswers = (): void => {
    answersRef.current += 1;
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
    endGame();
  };

  return (
    <>
      <GameInfoPanel
        timer={timer}
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
  );
};
