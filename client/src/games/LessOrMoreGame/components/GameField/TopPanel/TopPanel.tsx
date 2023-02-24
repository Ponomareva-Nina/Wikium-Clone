import { FC } from "react";
import { useTranslation } from "react-i18next";
import { getTimeFromSecond } from "../../../../../utils/date.util";
import styles from "./TopPanel.module.scss";

interface TopPanelProps {
  timer: number;
  points: number;
  level: number;
}

export const TopPanel: FC<TopPanelProps> = ({ timer, points, level }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.title}>{t("gamesPage.time")}</div>
        <div className={styles.value}>{getTimeFromSecond(timer)}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>{t("gamesPage.level")}</div>
        <div className={styles.value}>{level}-5</div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>{t("gamesPage.points")}</div>
        <div className={styles.value}>{points}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>{t("gamesPage.bonus")}</div>
        <div className={styles.value}>x{level}</div>
      </div>
    </div>
  );
};
