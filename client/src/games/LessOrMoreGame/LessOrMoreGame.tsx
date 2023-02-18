import { useCallback, useMemo, useState } from "react";
import { GameResults } from "../../components";
import { GameCategories } from "../../interfaces/Categories";
import { GameStatus, ResultData } from "../../interfaces/GameInterface";
import { useActions, useAppSelector } from "../../store/redux-hooks";

import GamePage from "./components/GamePage/GamePage";
import { RulesGamePage } from "./components/RulesGamePage/RulesGamePage";

import styles from "./LessOrMoreGame.module.scss";

export const LessOrMoreGame = () => {
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
    addAttempt({
      _id: user!._id,
      attempt: {
        gameId: 3,
        category: GameCategories.LOGICS,
        date: new Date().toISOString(),
        neurons: result.neurons,
      },
    });
    setGameStatus("finish");
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
