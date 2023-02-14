import { FC } from "react";
import { getTimeFromSecond } from "../../../../utils/date.util";
import { Levels, levelsData } from "../../data";
import styles from "./InfoPanel.module.scss";

interface InfoPanelProps {
  timer: number;
  level: number;
}

const lastLevel = levelsData[Levels.LAST].level;

export const InfoPanel: FC<InfoPanelProps> = ({ timer, level }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.title}>Время:</div>
        <div className={styles.value}>{getTimeFromSecond(timer)}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>Уровень:</div>
        <div className={styles.value}>
          {level}/{lastLevel}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>Очки:</div>
        <div className={styles.value}>20</div>
      </div>
    </div>
  );
};
