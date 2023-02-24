import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "../../../../../components/UI";
import { AnswerVars } from "../../../types/game-data.interface";

import styles from "./ControlPanel.module.scss";

interface ControlPanelProps {
  setAnswerHandler: (answer: AnswerVars) => void;
}

export const ControlPanel: FC<ControlPanelProps> = ({ setAnswerHandler }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <Button onClick={() => setAnswerHandler(AnswerVars.LEFT)}>{t("lessOrMoreGame.left")}</Button>
      <Button onClick={() => setAnswerHandler(AnswerVars.EQUAL)}>
        {t("lessOrMoreGame.equal")}
      </Button>
      <Button onClick={() => setAnswerHandler(AnswerVars.RIGHT)}>
        {t("lessOrMoreGame.right")}
      </Button>
    </div>
  );
};
