import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../UI";
import { ResultItem } from "./ResultItem.tsx/ResultItem";
import styles from "./GameResults.module.scss";
import { NeuronsChart } from "./ResultItem.tsx/NeuronsChart/NeuronsChart";

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
      title: "gameResults.neuronsCreated",
      value: neurons,
    },
  ];

  // TO DO: Get number of neurons gained by user from server and save it to userNeurons instead of random number below:
  const userNeurons = 3228;

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
