import { useCallback, useMemo, useState } from "react";
import { GameResults } from "../../components";
import { GameStatus, ResultData } from "../../interfaces/GameInterface";
import { useAppSelector } from "../../store/redux-hooks";

import GamePage from "./components/GamePage/GamePage";
import { RulesGamePage } from "./components/RulesGamePage/RulesGamePage";

import styles from "./LessOrMoreGame.module.scss";

export const LessOrMoreGame = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>("init");
  const [resultData, setResultData] = useState<ResultData | null>(null);
  const userStatistics = useAppSelector((state) => state.user.entity!.statistics);

  const neurons = useMemo(() => {
    return userStatistics.reduce((acc, stat) => acc + stat.neurons, 0);
  }, [userStatistics]);

  const startTraining = () => {
    setGameStatus("started");
  };

  const finishGame = (result: ResultData) => {
    setGameStatus("finish");
    // const statistics = {
    //   id: 1,
    //   category: GameCategories.MEMORY,
    //   countAttempt: new Date(),
    //   neurons: neuronsRef.current,
    // };
    setResultData(result);
  };

  return (
    <div className={styles.wrapper}>
      {gameStatus === "started" && <GamePage finishGame={finishGame} />}
      {gameStatus === "init" && <RulesGamePage startTraining={startTraining} />}
      {gameStatus === "finish" && resultData && (
        <GameResults userNeurons={neurons} resultData={resultData} newGameHandler={startTraining} />
      )}
    </div>
  );
};
