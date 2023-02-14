import { useCallback, useState } from "react";

import GamePage from "./components/GamePage/GamePage";
import { RulesGamePage } from "./components/RulesGamePage/RulesGamePage";

import styles from "./LessOrMoreGame.module.scss";

export const LessOrMoreGame = () => {
  const [isStartTrain, setIsStartTrain] = useState<boolean>(false);

  const startTrainHandler = useCallback(() => {
    setIsStartTrain(true);
  }, []);

  return (
    <div className={styles.wrapper}>
      {isStartTrain ? <GamePage /> : <RulesGamePage startTrainHandler={startTrainHandler} />}
    </div>
  );
};
