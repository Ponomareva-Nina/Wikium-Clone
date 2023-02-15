import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { LEVEL, LevelNumber } from "../../data";
import styles from "./InfoPanel.module.scss";
import { InfoPanelValues } from "./types/types";

interface InfoPanelProps {
  timer: number;
  currentLevel: number;
  points: number;
}

export const InfoPanel: FC<PropsWithChildren<InfoPanelProps>> = ({
  timer,
  currentLevel,
  points,
}) => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles.info_container)}>
      <div className={cn(styles.item_container)}>
        <span className={cn(styles.item_title)}>{t("infoPanel.time")}</span>
        <span className={cn(styles.item_content)}>{`${InfoPanelValues.HOURS}:${
          timer >= InfoPanelValues.MIN_MINUTES ? timer : `0${timer}`
        }`}</span>
      </div>
      <div className={cn(styles.item_container)}>
        <span className={cn(styles.item_title)}>{t("infoPanel.level")}</span>
        <span className={cn(styles.item_content)}>
          {`${currentLevel}-${LEVEL[LevelNumber.THREE].level}`}
        </span>
      </div>
      <div className={cn(styles.item_container)}>
        <span className={cn(styles.item_title)}>{t("infoPanel.score")}</span>
        <span className={cn(styles.item_content)}>{points}</span>
      </div>
    </div>
  );
};
