import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./StatisticsPage.module.scss";
import { games } from "../../constants/games";
import { AllTrainsChart } from "./AllTrainsChart/AllTrainsChart";
import { GameItem } from "../../interfaces/GameInterface";
import { CategoryChart } from "./CategoryChart/CategoryChart";
import { useAppSelector } from "../../store/redux-hooks";
import { GameCategories } from "../../interfaces/Categories";

type Period = "perDay" | "perWeak" | "perMonth";

export const StatisticsPage = () => {
  const { t } = useTranslation();

  const statistics = useAppSelector((state) => state.user.entity!.statistics);

  const [period, setPeriod] = useState<Period>("perDay");
  const statisticsPerPeriod = statistics.filter((attempt) => {
    if (period === "perDay") {
      const msDay = 1000 * 60 * 60 * 24;
      return new Date(attempt.date).getTime() + msDay >= Date.now();
    }
    if (period === "perWeak") {
      const msWeak = 1000 * 60 * 60 * 24 * 7;
      return new Date(attempt.date).getTime() + msWeak >= Date.now();
    }
    if (period === "perMonth") {
      const msMonth = 1000 * 60 * 60 * 24 * 7 * 30;
      return new Date(attempt.date).getTime() + msMonth >= Date.now();
    }
    return true;
  });

  const memory = statisticsPerPeriod
    .filter((attempt) => attempt.category === GameCategories.MEMORY)
    .reduce((acc, attempt) => acc + attempt.neurons, 0);
  const concentration = statisticsPerPeriod
    .filter((attempt) => attempt.category === GameCategories.CONCENTRATION)
    .reduce((acc, attempt) => acc + attempt.neurons, 0);
  const logics = statisticsPerPeriod
    .filter((attempt) => attempt.category === GameCategories.LOGICS)
    .reduce((acc, attempt) => acc + attempt.neurons, 0);

  const totalNeurons = memory + concentration + logics;
  const allTrains = games.map((game) => {
    let attempts = 0;
    statisticsPerPeriod.forEach((item) => {
      if (item.gameId === game.id) {
        attempts += 1;
      }
    });
    return {
      game,
      attempts,
    };
  });

  const periodChangeHandler = (newPeriod: Period) => {
    setPeriod(newPeriod);
  };

  return (
    <div className={cn("wrapper", styles.container)}>
      <div className={styles.period_bar}>
        <p className={styles.title}>{t("StatisticsPage.progress")}</p>
        <ul className={styles.periods}>
          <li
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
            onClick={() => periodChangeHandler("perDay")}
            onKeyDown={() => {}}
            className={period === "perDay" ? styles.period_active : styles.period}
          >
            {t("StatisticsPage.day")}
          </li>
          <li
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
            onClick={() => periodChangeHandler("perWeak")}
            onKeyDown={() => {}}
            className={period === "perWeak" ? styles.period_active : styles.period}
          >
            {t("StatisticsPage.week")}
          </li>
          <li
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
            onClick={() => periodChangeHandler("perMonth")}
            onKeyDown={() => {}}
            className={period === "perMonth" ? styles.period_active : styles.period}
          >
            {t("StatisticsPage.month")}
          </li>
        </ul>
      </div>

      <div className={styles.chart}>
        <CategoryChart
          memory={memory}
          concentration={concentration}
          logics={logics}
          totalNeurons={totalNeurons}
        />
      </div>

      <div className={styles.chart}>
        <AllTrainsChart trains={allTrains} />
      </div>
    </div>
  );
};
