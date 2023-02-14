import { useEffect, useRef, useState } from "react";
import { GameField } from "../GameField/GameField";
import styles from "./Game.module.scss";
import { Levels, levelsData } from "../../data";
import { createCardsArray } from "../../utils";
import { CardInterface, CardProps } from "../types/types";
import { InfoPanel } from "../InfoPanel/InfoPanel";
import { SCORE_INITIAL_VALUE } from "../../../../constants/constants";
import { useCounter } from "../../../../hooks/useCounter";
import { GameResults } from "../../../../components";

const firstLevel = levelsData[Levels.FIRST].level;
const lastLevel = levelsData[Levels.LAST].level;
const firstAnswer = 1;

export const Game = () => {
  const [isGameStarted, setIsGameStarted] = useState(true);
  const [level, setLevel] = useState(firstLevel);
  const [cardsData, setCardsData] = useState<CardInterface[]>([]);
  const [scoreCount, setScoreCount] = useState<number>(0);
  const totalAnswersCountRef = useRef<number>(0);
  const mistakesCountRef = useRef<number>(0);
  const matchedAnswersOnLevelRef = useRef<number>(0);
  const scoreConstantRef = useRef<number>(SCORE_INITIAL_VALUE);
  const correctAnswerRef = useRef<number>(firstAnswer);
  const timer = useCounter({ isReverse: true, initialValue: 60 });
  const levelTimeoutIdRef = useRef<NodeJS.Timer | null>(null);

  const startNewGame = () => {
    setIsGameStarted(true);
  };

  const endGame = () => {
    setIsGameStarted(false);
  };

  const generateNewCards = () => {
    const cards = createCardsArray(levelsData[level]);
    setCardsData(cards);
  };

  const resetCurrentLevelProgress = () => {
    matchedAnswersOnLevelRef.current = 0;
    correctAnswerRef.current = firstAnswer;
  };

  const registerMistake = () => {
    mistakesCountRef.current += 1;
    if (levelTimeoutIdRef.current) {
      clearTimeout(levelTimeoutIdRef.current);
    }
    levelTimeoutIdRef.current = setTimeout(() => {
      if (level > firstLevel) {
        setLevel((prev) => prev - 1);
      } else {
        generateNewCards();
      }
    }, 700);
    resetCurrentLevelProgress();
  };

  const registerCorrectAnswer = () => {
    matchedAnswersOnLevelRef.current += 1;
    correctAnswerRef.current += 1;
    totalAnswersCountRef.current += 1;
    if (matchedAnswersOnLevelRef.current === levelsData[level].cards) {
      if (levelTimeoutIdRef.current) {
        clearTimeout(levelTimeoutIdRef.current);
      }
      levelTimeoutIdRef.current = setTimeout(() => {
        if (level < lastLevel) {
          setLevel((prev) => prev + 1);
        } else {
          generateNewCards();
        }
      }, 700);
      resetCurrentLevelProgress();
    }
  };

  useEffect(() => {
    generateNewCards();
    scoreConstantRef.current = level > 0 ? level * SCORE_INITIAL_VALUE : SCORE_INITIAL_VALUE;
  }, [level]);

  const flipCards = () => {
    setCardsData(
      cardsData.map((card) => {
        return {
          ...card,
          matched: false,
          disabled: false,
        };
      })
    );
  };

  const disableCards = () => {
    setCardsData(
      cardsData.map((item) => {
        return {
          ...item,
          disabled: true,
        };
      })
    );
  };

  const updateCardProperty = (cardId: number, key: CardProps) => {
    setCardsData(
      cardsData.map((item) => {
        if (item.id === cardId) {
          item[key] = true;
        }
        return item;
      })
    );
  };

  const handleChoice = (card: CardInterface) => {
    if (card.value === correctAnswerRef.current) {
      registerCorrectAnswer();
      updateCardProperty(card.id, CardProps.MATCHED);
      setScoreCount((prev) => prev + scoreConstantRef.current);
      if (card.value === levelsData[level].cards) {
        updateCardProperty(card.id, CardProps.SOLVED);
        disableCards();
        if (timer === 0) {
          endGame();
          console.log(totalAnswersCountRef.current, mistakesCountRef.current, scoreCount);
        }
      }
    } else {
      updateCardProperty(card.id, CardProps.ERROR);
      disableCards();
      registerMistake();
      if (timer === 0) {
        endGame();
        console.log(totalAnswersCountRef.current, mistakesCountRef.current, scoreCount);
      }
    }
  };

  return (
    <div className={styles.container}>
      {isGameStarted ? (
        <>
          <InfoPanel timer={timer} level={level} score={scoreCount} />
          <GameField
            level={levelsData[level]}
            gameCards={cardsData}
            flipCards={flipCards}
            handleChoice={handleChoice}
          />
        </>
      ) : (
        <GameResults
          correctAnswers={totalAnswersCountRef.current}
          mistakes={mistakesCountRef.current}
          score={scoreCount}
          newGameHandler={startNewGame}
        />
      )}
    </div>
  );
};
