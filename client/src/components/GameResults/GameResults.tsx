import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Button } from "../UI";
import { ResultItem } from "./ResultItem.tsx/ResultItem";
import styles from "./GameResults.module.scss";
import { NEURONS_ON_LEVEL } from "../../constants/constants";

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

ChartJS.register(ArcElement, Tooltip, Legend);

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

  // TO DO: Get number of neurons gained by user from server and save it to userNeurons instead of random number below:
  const userNeurons = 3228;
  const currentLevelNeurons = userNeurons % NEURONS_ON_LEVEL;
  const level = Math.ceil(userNeurons / NEURONS_ON_LEVEL);
  const neuronsToTheNextLevel = NEURONS_ON_LEVEL - currentLevelNeurons;
  const maxNeuronsOnLevel = NEURONS_ON_LEVEL * level;

  const data = {
    labels: [],
    datasets: [
      {
        label: "Neurons",
        data: [currentLevelNeurons, neuronsToTheNextLevel],
        backgroundColor: ["rgba(96, 57, 170, 1)", "rgba(222, 222, 222, 1)"],
        borderColor: ["#333333"],
        borderWidth: 1,
        cutout: "90%",
      },
    ],
  };

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
        <div className={styles.chart}>
          <Doughnut className={styles.canvas} data={data} />
          <div className={styles.chart__info}>
            <span>{level} уровень</span>
            <span>
              {userNeurons} из {maxNeuronsOnLevel} нейронов
            </span>
          </div>
        </div>
      </div>
      <Button onClick={newGameHandler}>{t("gameResults.playAgain")}</Button>
    </div>
  );
};
