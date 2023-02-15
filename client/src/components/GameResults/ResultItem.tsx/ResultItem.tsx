import { FC } from "react";
import styles from "./Result.module.scss";

interface ResultProps {
  resultTitle: string;
  resultValue: number | string;
}

export const ResultItem: FC<ResultProps> = ({ resultTitle, resultValue }) => {
  return (
    <div className={styles.result}>
      <span className={styles.result__item}>{resultTitle}</span>
      <span className={styles.result__value}>{resultValue}</span>
    </div>
  );
};
