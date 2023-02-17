import { useTranslation } from "react-i18next";
import { FC, useEffect, useState } from "react";
import styles from "./AllTrainsChart.module.scss";
import sortIcon from "../../../assets/images/Statistics/sort-icon.svg";
import { GameItem } from "../../../interfaces/GameInterface";
import { TrainItem } from "./TrainItem/TrainItem";

interface AllTrainsChartProps {
  trains: GameItem[] | null;
}

export const AllTrainsChart: FC<AllTrainsChartProps> = ({ trains }) => {
  const { t } = useTranslation();

  const [allTrainsNumber, setAllTrainsNumber] = useState(0);

  const updateTrainsNumber = () => {
    const trainsNumber = trains
      ?.map((item) => {
        return item.attempts;
      })
      .reduce((prev, next) => prev + next);
    setAllTrainsNumber(trainsNumber || 0);
  };

  useEffect(() => {
    updateTrainsNumber();
  }, [trains]);

  return (
    <>
      <div className={styles.title}>{t("StatisticsPage.allTrains")}</div>
      <div className={styles.trains_number}>
        <span>{t("StatisticsPage.total")}</span> {allTrainsNumber}
      </div>
      <div className={styles.sort}>
        <p>{t("StatisticsPage.ascending")}</p>
        <button className={styles.sort__btn} type="button">
          <img src={sortIcon} alt="" />
        </button>
      </div>
      <div className={styles.games_list}>
        {trains?.map((train) => {
          return <TrainItem key={train.game.id} train={train} />;
        })}
      </div>
    </>
  );
};
