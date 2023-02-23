import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "../../../../components/UI";

import styles from "./RulesGamePage.module.scss";

interface RulesGamePageProps {
  startTraining: () => void;
}

export const RulesGamePage: FC<RulesGamePageProps> = ({ startTraining }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div>{t("lessOrMoreGame.rules")}</div>
      <Button onClick={startTraining}>{t("gameLayout.startExercise")}</Button>
    </div>
  );
};
