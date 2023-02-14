import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "../../../../components/UI";

import styles from "./RulesGamePage.module.scss";

interface RulesGamePageProps {
  startTrainHandler: () => void;
}

export const RulesGamePage: FC<RulesGamePageProps> = ({ startTrainHandler }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div>{t("lessOrMoreGame.rules")}</div>
      <Button onClick={startTrainHandler}>{t("gameLayout.startExercise")}</Button>
    </div>
  );
};
