import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../UI";
import { ResultItem } from "./ResultItem.tsx/ResultItem";
import styles from "./GameResults.module.scss";

interface GameResultsProps {
  correctAnswers: number;
  mistakes: number;
  score: number;
  neurons: number;
  newGameHandler: () => void;
}

interface Result {
  title: string;
  value: string | number;
}

export const GameResults: FC<GameResultsProps> = ({
  correctAnswers = 0,
  mistakes = 0,
  score = 0,
  neurons = 0,
  newGameHandler,
}) => {
  const { t } = useTranslation();
  const totalAnswers = mistakes + correctAnswers;
  const results: Result[] = [
    {
      title: "gameResults.score",
      value: score,
    },
    {
      title: "gameResults.correctAnswers",
      value: `${correctAnswers} ${t("gameResults.from")} ${totalAnswers}`,
    },
    {
      title: "gameResults.accuracy",
      value: `${((correctAnswers / totalAnswers) * 100).toFixed(2)}%`,
    },
    {
      title: "gameResults.neurons",
      value: neurons,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{t("gameResults.results")}</div>
      {results.map((result) => {
        return <ResultItem resultTitle={t(result.title)} resultValue={result.value} />;
      })}
      <Button onClick={newGameHandler}>{t("gameResults.playAgain")}</Button>
    </div>
  );
};
