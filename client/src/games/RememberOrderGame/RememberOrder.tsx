import { useEffect, useRef, useState } from "react";
import { GameField } from "./components/GameField/GameField";
import styles from "./RememberOrder.module.scss";
import { Levels, levelsData } from "./data";
import { RememberOrderRules } from "./components/Rules/Rules";
import { createCardsArray } from "./utils";
import { CardInterface, CardProps } from "./components/types/types";

const firstLevel = levelsData[Levels.FIRST].level;
const lastLevel = levelsData[Levels.LAST].level;
const firstAnswer = 1;

export const RememberOrderGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [level, setLevel] = useState(firstLevel);
  const [cardsData, setCardsData] = useState<CardInterface[]>([]);
  const [totalAnswersCount, setTotalAnswersCount] = useState<number>(0);
  const mistakesCountRef = useRef<number>(0);
  const matchedAnswersOnLevelRef = useRef<number>(0);
  const correctAnswerRef = useRef<number>(firstAnswer);
  const levelTimeoutIdRef = useRef<NodeJS.Timer | null>(null);

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
    if (level > firstLevel) {
      if (levelTimeoutIdRef.current) {
        clearTimeout(levelTimeoutIdRef.current);
      }
      levelTimeoutIdRef.current = setTimeout(() => {
        setLevel((prev) => prev - 1);
      }, 1000);
    } else {
      if (levelTimeoutIdRef.current) {
        clearTimeout(levelTimeoutIdRef.current);
      }
      levelTimeoutIdRef.current = setTimeout(() => {
        generateNewCards();
      }, 1000);
    }
    resetCurrentLevelProgress();
  };

  const registerCorrectAnswer = () => {
    matchedAnswersOnLevelRef.current += 1;
    correctAnswerRef.current += 1;
    setTotalAnswersCount((prev) => prev + 1);
    if (matchedAnswersOnLevelRef.current === levelsData[level].cards) {
      if (level < lastLevel) {
        if (levelTimeoutIdRef.current) {
          clearTimeout(levelTimeoutIdRef.current);
        }
        levelTimeoutIdRef.current = setTimeout(() => {
          setLevel((prev) => prev + 1);
        }, 1000);
      } else {
        generateNewCards();
      }
      resetCurrentLevelProgress();
    }
  };

  useEffect(() => {
    generateNewCards();
  }, [level]);

  const flipCards = () => {
    setCardsData(
      cardsData.map((card) => {
        return {
          ...card,
          matched: false,
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
      if (card.value === levelsData[level].cards) {
        updateCardProperty(card.id, CardProps.SOLVED);
      }
    } else {
      // updateCardProperty(card.id, CardProps.MATCHED);
      updateCardProperty(card.id, CardProps.ERROR);
      registerMistake();
    }
  };

  const startGame = () => {
    setIsGameStarted(true);
  };

  return (
    <div className={styles.game_container}>
      {isGameStarted ? (
        <>
          <div>{`level: ${level}, mistakes: ${mistakesCountRef.current}, answers: ${totalAnswersCount}`}</div>
          <GameField
            level={levelsData[level]}
            gameCards={cardsData}
            flipCards={flipCards}
            handleChoice={handleChoice}
          />
        </>
      ) : (
        <RememberOrderRules startGameHandler={startGame} />
      )}
    </div>
  );
};
