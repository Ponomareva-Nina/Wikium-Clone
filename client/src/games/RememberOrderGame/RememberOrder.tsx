import { useEffect, useRef, useState } from "react";
import { GameField } from "./components/GameField/GameField";
import styles from "./RememberOrder.module.scss";
import { Levels, levelsData } from "./data";
import { RememberOrderRules } from "./components/Rules/Rules";
import { createCardsArray } from "./utils";
import { CardInterface } from "./components/types/types";

const firstLevel = levelsData[Levels.FIRST].level;
const lastLevel = levelsData[Levels.LAST].level;

export const RememberOrderGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [level, setLevel] = useState(firstLevel);
  const [cardsData, setCardsData] = useState<CardInterface[]>([]);
  const [totalAnswersCount, setTotalAnswersCount] = useState<number>(0);
  const mistakesCountRef = useRef<number>(0);
  const currentLevelAnswersRef = useRef<number>(0);
  const currentAnswerNumberRef = useRef<number>(1);
  const levelTimeoutIdRef = useRef<NodeJS.Timer | null>(null);

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
      const cards = createCardsArray(levelsData[level]);
      setCardsData(cards);
    }
    currentLevelAnswersRef.current = 0;
    currentAnswerNumberRef.current = 1;
  };

  const registerCorrectAnswer = () => {
    currentLevelAnswersRef.current += 1;
    setTotalAnswersCount((prev) => prev + 1);
    if (currentLevelAnswersRef.current === levelsData[level].cards) {
      if (level < lastLevel) {
        if (levelTimeoutIdRef.current) {
          clearTimeout(levelTimeoutIdRef.current);
        }
        levelTimeoutIdRef.current = setTimeout(() => {
          setLevel((prev) => prev + 1);
        }, 1000);
      }
      currentLevelAnswersRef.current = 0;
    }
  };

  useEffect(() => {
    const cards = createCardsArray(levelsData[level]);
    setCardsData(cards);
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

  const handleChoice = (card: CardInterface) => {
    if (card.value === currentAnswerNumberRef.current) {
      registerCorrectAnswer();
      currentAnswerNumberRef.current += 1;
      setCardsData(
        cardsData.map((item) => {
          if (item.value === card.value) {
            return {
              ...item,
              matched: true,
            };
          }
          return item;
        })
      );
      if (card.value === levelsData[level].cards) {
        setCardsData(
          cardsData.map((item) => {
            if (item.value === card.value) {
              return {
                ...item,
                matched: true,
                solved: true,
              };
            }
            return item;
          })
        );
        currentLevelAnswersRef.current = 0;
        currentAnswerNumberRef.current = 1;
      }
    } else {
      setCardsData(
        cardsData.map((item) => {
          if (item.value === card.value) {
            return {
              ...item,
              error: true,
            };
          }
          return item;
        })
      );
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
