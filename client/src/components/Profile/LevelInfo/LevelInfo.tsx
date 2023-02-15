import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LevelInfo.module.scss";

interface LevelInfoProps {
  currentLevel: number;
  neurons: number;
  progressPercent: number;
  needNeurons: number;
}

export const LevelInfo: FC<LevelInfoProps> = ({
  currentLevel,
  needNeurons,
  neurons,
  progressPercent,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.level}>
          <strong>{currentLevel}</strong> {t("accountPage.level")}
        </div>
        <div className={styles.neurons}>
          <strong>{neurons}</strong> {t("accountPage.neurons")}
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles["progress-outer"]}>
          <div style={{ width: `${progressPercent}%` }} className={styles["progress-inner"]} />
        </div>
      </div>
      <div className={styles.bottom}>
        {t("accountPage.levelInfoDesc").replace("[number]", String(needNeurons))}
      </div>
    </div>
  );
};
