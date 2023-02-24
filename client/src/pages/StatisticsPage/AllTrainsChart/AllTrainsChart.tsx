import { useTranslation } from "react-i18next";
import { FC, useState } from "react";
import styles from "./AllTrainsChart.module.scss";
import sortIcon from "../../../assets/images/Statistics/sort-icon.svg";
import { GameItem } from "../../../interfaces/GameInterface";
import { TrainItem } from "./TrainItem/TrainItem";

interface AllTrainsChartProps {
  trains: GameItem[];
}

export const AllTrainsChart: FC<AllTrainsChartProps> = ({ trains }) => {
  const { t } = useTranslation();

  const [sort, setSort] = useState<"ASC" | "DESC">("DESC");

  const trainsNumber = trains
    ?.map((item) => {
      return item.attempts;
    })
    .reduce((prev, next) => prev + next, 0);

  const trainsBySort = [...trains].sort((a, b) => {
    if (sort === "ASC") {
      return a.attempts - b.attempts;
    }
    return b.attempts - a.attempts;
  });

  const setSortHandler = () => {
    setSort((prevVal) => (prevVal === "ASC" ? "DESC" : "ASC"));
  };

  return (
    <>
      <div className={styles.title}>{t("StatisticsPage.allTrains")}</div>
      <div className={styles.trains_number}>
        <span>{t("StatisticsPage.total")}</span> {trainsNumber}
      </div>
      <div className={styles.sort}>
        <p>{sort === "ASC" ? t("StatisticsPage.ascending") : t("StatisticsPage.descending")}</p>
        <button onClick={setSortHandler} className={styles.sort__btn} type="button">
          <img src={sortIcon} alt="" />
        </button>
      </div>
      <div className={styles.games_list}>
        {trainsBySort.map((train) => {
          if (train.attempts > 0) {
            return <TrainItem key={train.game.id} train={train} />;
          }
          return null;
        })}
      </div>
    </>
  );
};
