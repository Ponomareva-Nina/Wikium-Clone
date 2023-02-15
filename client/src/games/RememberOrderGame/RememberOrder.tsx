import { useState } from "react";
import { Game } from "./components/Game/Game";
import styles from "./RememberOrder.module.scss";
import { RememberOrderRules } from "./components/Rules/Rules";

export const RememberOrderGame = () => {
  const [isTrainingStarted, setIsTrainingStarted] = useState(false);

  const startTraining = () => {
    setIsTrainingStarted(true);
  };

  return (
    <div className={styles.game_container}>
      {isTrainingStarted ? <Game /> : <RememberOrderRules startGameHandler={startTraining} />}
    </div>
  );
};
