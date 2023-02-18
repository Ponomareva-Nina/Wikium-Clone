import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./StatisticsPage.module.scss";
import { games } from "../../constants/games";
import { AllTrainsChart } from "./AllTrainsChart/AllTrainsChart";
import { GameItem } from "../../interfaces/GameInterface";
import { CategoryChart } from "./CategoryChart/CategoryChart";
import { useAppSelector } from "../../store/redux-hooks";

export const StatisticsPage = () => {
  const { t } = useTranslation();

  const statistics = useAppSelector((state) => state.user.entity!.statistics);

  const [trainsForPeriod, setTrainsForPeriod] = useState<null | GameItem[]>(null);

  useEffect(() => {
    const allTrains = games.map((game) => {
      let attempts = 0;
      statistics.forEach((item) => {
        if (item.gameId === game.id) {
          attempts += 1;
        }
      });
      return {
        game,
        attempts,
      };
    });
    setTrainsForPeriod(allTrains);
  }, [statistics]);

  return (
    <div className={cn("wrapper", styles.container)}>
      <div className={styles.period_bar}>
        <p className={styles.title}>{t("StatisticsPage.progress")}</p>
        <ul className={styles.periods}>
          <li className={styles.period_active}>{t("StatisticsPage.day")}</li>
          <li className={styles.period}>{t("StatisticsPage.week")}</li>
          <li className={styles.period}>{t("StatisticsPage.month")}</li>
        </ul>
      </div>

      <div className={styles.chart}>
        <CategoryChart trains={trainsForPeriod} />
      </div>

      <div className={styles.chart}>
        <AllTrainsChart trains={trainsForPeriod} />
      </div>
    </div>
  );
};
