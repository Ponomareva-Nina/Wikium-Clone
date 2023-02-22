import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { NEURONS_ON_LEVEL } from "../../../constants/constants";
import styles from "./NeuronsChart.module.scss";

interface NeuronsChartProps {
  userNeurons: number;
}

export const NeuronsChart: FC<NeuronsChartProps> = ({ userNeurons }) => {
  const { t } = useTranslation();
  const currentLevelNeurons = userNeurons % NEURONS_ON_LEVEL;
  const level = Math.ceil(userNeurons / NEURONS_ON_LEVEL);
  const neuronsToTheNextLevel = NEURONS_ON_LEVEL - currentLevelNeurons;
  const maxNeuronsOnLevel = NEURONS_ON_LEVEL * level;

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: [],
    datasets: [
      {
        label: "Neurons",
        data: [currentLevelNeurons, neuronsToTheNextLevel],
        backgroundColor: ["rgba(96, 57, 170, 1)", "rgba(222, 222, 222, 1)"],
        borderColor: ["#9e9e9e"],
        borderWidth: 1,
        cutout: "90%",
      },
    ],
  };

  return (
    <div className={styles.chart}>
      <Doughnut className={styles.canvas} data={data} />
      <div className={styles.chart__info}>
        <span className={styles.level}>
          {level} {t("gameResults.level")}
        </span>
        <span>
          {userNeurons} {t("gameResults.from")} {maxNeuronsOnLevel} {t("gameResults.neurons")}
        </span>
      </div>
    </div>
  );
};
