import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../UI";
import styles from "./GameResults.module.scss";

interface GameResultsProps {
  correctAnswers: number;
  mistakes: number;
  score: number;
  neurons: number;
  newGameHandler: () => void;
}

export const GameResults: FC<GameResultsProps> = ({
  correctAnswers = 0,
  mistakes = 0,
  score = 0,
  neurons = 0,
  newGameHandler,
}) => {
  const { t } = useTranslation();
  const totalAnswers = mistakes + correctAnswers;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{t("gameResults.results")}</div>

      <div className={styles.info}>
        <div className={styles.result}>
          <span className={styles.result__item}>{t("gameResults.score")}</span>
          <span className={styles.result__value}>{score}</span>
        </div>
        <div className={styles.result}>
          <span className={styles.result__item}>{t("gameResults.correctAnswers")}</span>
          <span className={styles.result__value}>
            {correctAnswers} {t("gameResults.from")} {totalAnswers}
          </span>
        </div>
        <div className={styles.result}>
          <span className={styles.result__item}>{t("gameResults.accuracy")}</span>
          <span className={styles.result__value}>
            {((correctAnswers / totalAnswers) * 100).toFixed(2)}%
          </span>
        </div>
        <div className={styles.result}>
          <span className={styles.result__item}>{t("gameResults.neurons")}</span>
          <span className={styles.result__value}>{neurons}</span>
        </div>
      </div>

      <Button onClick={newGameHandler}>{t("gameResults.playAgain")}</Button>
    </div>
  );
};
