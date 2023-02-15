import { FC } from "react";
import { useTranslation } from "react-i18next";
import { getTimeFromSecond } from "../../utils/date.util";
import { InfoItem } from "./InfoItem.tsx/InfoItem";
import styles from "./GameInfoPanel.module.scss";

interface InfoPanelProps {
  timer: number;
  currentLevel: number;
  maxLevel: number;
  score: number;
  mistakes: boolean;
  bonus: boolean;
  mistakesNumber?: number;
  bonusNumber?: number;
}

export const GameInfoPanel: FC<InfoPanelProps> = ({
  timer,
  currentLevel,
  maxLevel,
  score,
  mistakes,
  bonus,
  mistakesNumber = 0,
  bonusNumber = 0,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <InfoItem title={t("gamesData.time")} value={getTimeFromSecond(timer)} />
      <InfoItem title={t("gamesData.level")} value={`${currentLevel}/${maxLevel}`} />
      <InfoItem title={t("gamesData.score")} value={score} />
      {mistakes && <InfoItem title={t("gamesData.mistakes")} value={mistakesNumber} />}
      {bonus && <InfoItem title={t("gamesData.bonus")} value={`×${bonusNumber}`} />}
    </div>
  );
};
