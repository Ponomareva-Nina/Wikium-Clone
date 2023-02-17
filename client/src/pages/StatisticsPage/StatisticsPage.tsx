import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import styles from "./StatisticsPage.module.scss";
import { games } from "../../constants/games";
import { Statistics } from "../../interfaces/Statistics";
import { AllTrainsChart } from "./AllTrainsChart/AllTrainsChart";
import { GameItem } from "../../interfaces/GameInterface";

export const StatisticsPage = () => {
  const { t } = useTranslation();
  // TO DO: Get data from server (Statistics[{ gameId; category; date; neurons]) instead of statistics below
  const statistics: Statistics = [
    {
      gameId: 1,
      category: "memory",
      date: new Date(),
      neurons: 240,
    },
    {
      gameId: 0,
      category: "concentration",
      date: new Date(),
      neurons: 180,
    },
    {
      gameId: 1,
      category: "memory",
      date: new Date(),
      neurons: 120,
    },
    {
      gameId: 1,
      category: "memory",
      date: new Date(),
      neurons: 120,
    },
  ];

  const [statisticsData, setStatisticsData] = useState(statistics);
  const [trainsForPeriod, setTrainsForPeriod] = useState<null | GameItem[]>(null);

  useEffect(() => {
    const allTrains = games.map((game) => {
      let attempts = 0;
      statisticsData.forEach((item) => {
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
  }, [statisticsData]);

  return (
    <div className="wrapper">
      <div className={styles.chart}>
        <AllTrainsChart trains={trainsForPeriod} />
      </div>
    </div>
  );
};
