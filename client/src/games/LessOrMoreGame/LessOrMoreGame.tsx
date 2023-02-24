import { useMemo, useState } from "react";
import { GameResults, StartGamePage } from "../../components";
import { GameCategories } from "../../interfaces/Categories";
import { GameStatus, ResultData } from "../../interfaces/GameInterface";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import { addAttempt } from "../../store/user/user.actions";
import { GameField } from "./components/GameField/GameField";

import { RulesGamePage } from "./components/RulesGamePage/RulesGamePage";

import styles from "./LessOrMoreGame.module.scss";

export const LessOrMoreGame = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>("init");
  const [resultData, setResultData] = useState<ResultData | null>(null);
  const user = useAppSelector((state) => state.user.entity);

  const dispatch = useAppDispatch();

  const neurons = useMemo(() => {
    return user!.statistics.reduce((acc, stat) => acc + stat.neurons, 0);
  }, [user?.statistics]);

  const startTraining = () => {
    setGameStatus("started");
  };

  const finishGame = (result: ResultData) => {
    const newAttempt = {
      _id: user!._id,
      attempt: {
        gameId: 3,
        category: GameCategories.LOGICS,
        date: new Date().toISOString(),
        neurons: result.neurons,
      },
    };
    dispatch(addAttempt(newAttempt));
    setGameStatus("finish");
    setResultData(result);
  };

  return (
    <div className={styles.wrapper}>
      {gameStatus === "started" && (
        <StartGamePage>
          <GameField finishGame={finishGame} />
        </StartGamePage>
      )}
      {gameStatus === "init" && <RulesGamePage startTraining={startTraining} />}
      {gameStatus === "finish" && resultData && (
        <GameResults userNeurons={neurons} resultData={resultData} newGameHandler={startTraining} />
      )}
    </div>
  );
};
