import { FC } from "react";
import { getTimeFromSecond } from "../../../../../../utils/date.util";
import styles from "./TopPanel.module.scss";

interface TopPanelProps {
  timer: number;
}

export const TopPanel: FC<TopPanelProps> = ({ timer }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.title}>Время:</div>
        <div className={styles.value}>{getTimeFromSecond(timer)}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>Уровень:</div>
        <div className={styles.value}>1-5</div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>Очки:</div>
        <div className={styles.value}>20</div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>Бонус:</div>
        <div className={styles.value}>x1</div>
      </div>
    </div>
  );
};
