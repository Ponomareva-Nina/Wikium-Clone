import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "../../../../../components/UI";
import { BREAKPOINT_LESS_OR_MORE_GAME } from "../../../../../constants/constants";
import { useViewport } from "../../../../../hooks/useViewport";
import { AnswerVars } from "../../../types/game-data.interface";

import styles from "./ControlPanel.module.scss";

interface ControlPanelProps {
  setAnswerHandler: (answer: AnswerVars) => void;
}

export const ControlPanel: FC<ControlPanelProps> = ({ setAnswerHandler }) => {
  const { t } = useTranslation();
  const { width } = useViewport();
  return (
    <div className={styles.wrapper}>
      <Button onClick={() => setAnswerHandler(AnswerVars.LEFT)}>
        {width > BREAKPOINT_LESS_OR_MORE_GAME ? t("lessOrMoreGame.left") : t("lessOrMoreGame.top")}
      </Button>
      <Button onClick={() => setAnswerHandler(AnswerVars.EQUAL)}>
        {t("lessOrMoreGame.equal")}
      </Button>
      <Button onClick={() => setAnswerHandler(AnswerVars.RIGHT)}>
        {width > BREAKPOINT_LESS_OR_MORE_GAME
          ? t("lessOrMoreGame.right")
          : t("lessOrMoreGame.bottom")}
      </Button>
    </div>
  );
};
