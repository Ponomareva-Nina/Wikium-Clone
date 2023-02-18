import { useMemo, useState } from "react";
import { useActionData } from "react-router-dom";
import { Game } from "./components/Game/Game";
import styles from "./RememberOrder.module.scss";
import { RememberOrderRules } from "./components/Rules/Rules";
import { GameResults } from "../../components";
import { GameStatus, ResultData } from "../../interfaces/GameInterface";
import { useActions, useAppSelector } from "../../store/redux-hooks";
import { GameCategories } from "../../interfaces/Categories";

export const RememberOrderGame = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>("init");
  const [resultData, setResultData] = useState<ResultData | null>(null);
  const user = useAppSelector((state) => state.user.entity);

  const { addAttempt } = useActions();
  const neurons = useMemo(() => {
    return user!.statistics.reduce((acc, stat) => acc + stat.neurons, 0);
  }, [user?.statistics]);

  const startTraining = () => {
    setGameStatus("started");
  };

  const finishGame = (result: ResultData) => {
    setGameStatus("finish");
    addAttempt({
      _id: user!._id,
      attempt: {
        gameId: 2,
        category: GameCategories.MEMORY,
        date: new Date().toISOString(),
        neurons: result.neurons,
      },
    });
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
