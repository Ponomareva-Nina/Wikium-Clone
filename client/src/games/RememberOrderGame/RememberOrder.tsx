import { useMemo, useState } from "react";
import styles from "./RememberOrder.module.scss";
import { RememberOrderRules } from "./components/Rules/Rules";
import { GameResults, StartGamePage } from "../../components";
import { GameStatus, ResultData } from "../../interfaces/GameInterface";
import { GameCategories } from "../../interfaces/Categories";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import { addAttempt } from "../../store/user/user.actions";
import { Game } from "./components/Game/Game";
import { GamesId } from "../../constants/games";

export const RememberOrderGame = () => {
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
    setGameStatus("finish");
    const newAttempt = {
      _id: user!._id,
      attempt: {
        gameId: 2,
        category: GameCategories.MEMORY,
        date: new Date().toISOString(),
        neurons: result.neurons,
      },
    };
    dispatch(addAttempt(newAttempt));
    setResultData(result);
  };

  return (
    <div className={styles.game_container}>
      {gameStatus === "started" && (
        <StartGamePage>
          <Game finishGame={finishGame} />
        </StartGamePage>
      )}
      {gameStatus === "init" && <RememberOrderRules startGameHandler={startTraining} />}
      {gameStatus === "finish" && resultData && (
        <GameResults
          id={GamesId.SECOND}
          userNeurons={neurons}
          resultData={resultData}
          newGameHandler={startTraining}
        />
      )}
    </div>
  );
};
