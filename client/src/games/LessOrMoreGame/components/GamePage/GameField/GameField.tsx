import { useCounter } from "../../../../../hooks/useCounter";
import { ControlPanel } from "./ControlPanel/ControlPanel";
import { DigitCard } from "./DigitCard/DigitCard";
import styles from "./GameField.module.scss";
import { TopPanel } from "./TopPanel/TopPanel";

export const GameField = () => {
  const timer = useCounter({ isReverse: true, initialValue: 60 });

  return (
    <div className={styles.wrapper}>
      <TopPanel timer={timer} />
      <div className={styles.contents}>
        <div className={styles.expressions}>
          <DigitCard />
          <DigitCard />
        </div>
        <ControlPanel />
      </div>
    </div>
  );
};
