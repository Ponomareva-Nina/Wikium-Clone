import { FC } from "react";
import { useTranslation } from "react-i18next";
import { getTimeFromSecond } from "../../../../utils/date.util";
import { Levels, levelsData } from "../../data";
import styles from "./InfoPanel.module.scss";

interface InfoPanelProps {
  timer: number;
  level: number;
  score: number;
}

const lastLevel = levelsData[Levels.LAST].level;

export const InfoPanel: FC<InfoPanelProps> = ({ timer, level, score }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.title}>{t("gamesData.time")}:</div>
        <div className={styles.value}>{getTimeFromSecond(timer)}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>{t("gamesData.level")}:</div>
        <div className={styles.value}>
          {level}/{lastLevel}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>{t("gamesData.score")}:</div>
        <div className={styles.value}>{score}</div>
      </div>
    </div>
  );
};
