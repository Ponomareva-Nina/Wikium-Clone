import { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { GameItem } from "../../../interfaces/GameInterface";
import styles from "./CategoryChart.module.scss";
import { CategoryItem } from "./CategoryItem/CategoryItem";

interface CategoryChartProps {
  memory: number;
  concentration: number;
  logics: number;
  totalNeurons: number;
}

ChartJS.register(ArcElement, Tooltip, Legend);

export const CategoryChart: FC<CategoryChartProps> = ({
  memory,
  concentration,
  logics,
  totalNeurons,
}) => {
  const memoryColor = "rgb(0, 211, 164)";
  const concentrationColor = "rgb(143, 74, 249)";
  const logicsColor = "rgb(245, 166, 35)";

  const data = {
    labels: [],
    datasets: [
      {
        label: "Neurons",
        data: [memory, concentration, logics],
        backgroundColor: [memoryColor, concentrationColor, logicsColor],
        borderColor: ["#b3b3b3"],
        borderWidth: 1,
        cutout: "50%",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.chart_container}>
        <Doughnut className={styles.canvas} data={data} />
      </div>
      <div className={styles.detailed_info}>
        <CategoryItem
          color={memoryColor}
          title="gamesData.memory"
          neurons={memory}
          totalNeuronsNumber={totalNeurons}
        />
        <CategoryItem
          color={concentrationColor}
          title="gamesData.concentration"
          neurons={concentration}
          totalNeuronsNumber={totalNeurons}
        />
        <CategoryItem
          color={logicsColor}
          title="gamesData.logics"
          neurons={logics}
          totalNeuronsNumber={totalNeurons}
        />
      </div>
    </div>
  );
};
