import { useMemo, useState } from "react";
import { Game } from "./components/Game/Game";
import styles from "./RememberOrder.module.scss";
import { RememberOrderRules } from "./components/Rules/Rules";
import { GameResults } from "../../components";
import { GameStatus, ResultData } from "../../interfaces/GameInterface";
import { useAppSelector } from "../../store/redux-hooks";

export const RememberOrderGame = () => {
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
    <div className={styles.game_container}>
      {gameStatus === "started" && <Game finishGame={finishGame} />}
      {gameStatus === "init" && <RememberOrderRules startGameHandler={startTraining} />}
      {gameStatus === "finish" && resultData && (
        <GameResults userNeurons={neurons} resultData={resultData} newGameHandler={startTraining} />
      )}
    </div>
  );
};
