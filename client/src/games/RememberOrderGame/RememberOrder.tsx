import { RememberOrderRules } from "./components/rulesWindow/Rules";
import styles from "./RememberOrder.module.scss";

export const RememberOrderGame = () => {
  return (
    <div className={styles.game_container}>
      <RememberOrderRules />;
    </div>
  );
};
