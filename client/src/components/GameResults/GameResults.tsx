import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../UI";
import { ResultItem } from "./ResultItem.tsx/ResultItem";
import styles from "./GameResults.module.scss";
import { NeuronsChart } from "./ResultItem.tsx/NeuronsChart/NeuronsChart";
import { ResultData } from "../../interfaces/GameInterface";

interface GameResultsProps {
  resultData: ResultData;
  userNeurons: number;
  newGameHandler: () => void;
}

interface Result {
  title: string;
  value: string | number;
}

export const GameResults: FC<GameResultsProps> = ({ resultData, newGameHandler, userNeurons }) => {
  const { mistakes, correctAnswers, neurons, score } = resultData;
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
      value: `${((correctAnswers / totalAnswers) * 100 || 0).toFixed(2)}%`,
    },
    {
      title: "gameResults.neuronsCreated",
      value: neurons,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{t("gameResults.results")}</div>
      <div className={styles.info}>
        <div className={styles.list}>
          {results.map((result) => {
            return (
              <ResultItem
                key={result.title}
                resultTitle={t(result.title)}
                resultValue={result.value}
              />
            );
          })}
        </div>
        <NeuronsChart userNeurons={userNeurons} />
      </div>
      <Button onClick={newGameHandler}>{t("gameResults.playAgain")}</Button>
    </div>
  );
};
