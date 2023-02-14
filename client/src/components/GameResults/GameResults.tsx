import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../UI";
import styles from "./GameResults.module.scss";

interface GameResultsProps {
  correctAnswers: number;
  mistakes: number;
  score: number;
  newGameHandler: () => void;
}

export const GameResults: FC<GameResultsProps> = ({
  correctAnswers = 0,
  mistakes = 0,
  score = 0,
  newGameHandler,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <Button>{t("gamesData.playAgain")}</Button>
    </div>
  );
};
