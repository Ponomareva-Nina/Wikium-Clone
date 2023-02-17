import { useTranslation } from "react-i18next";
import { FC, useEffect, useState } from "react";
import styles from "./AllTrainsChart.module.scss";
import sortIcon from "../../../assets/images/Statistics/sort-icon.svg";
import { GameItem } from "../../../interfaces/GameInterface";

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
      <div>{t("StatisticsPage.allTrains")}</div>
      <div>{allTrainsNumber}</div>
      <div>
        <p>Сначала популярные</p>
        <button className={styles.sort_btn} type="button">
          <img src={sortIcon} alt="" />
        </button>
      </div>
      <div className={styles.games_list}>items</div>
    </>
  );
};
