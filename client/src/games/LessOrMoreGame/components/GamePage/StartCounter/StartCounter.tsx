import { FC } from "react";
import styles from "./StartCounter.module.scss";

interface StartCounterProps {
  count: number;
}
export const StartCounter: FC<StartCounterProps> = ({ count }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.counter}>{count}</div>
    </div>
  );
};
