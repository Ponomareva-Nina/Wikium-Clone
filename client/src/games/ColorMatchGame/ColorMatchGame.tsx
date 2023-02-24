import cn from "classnames";
import { FC, PropsWithChildren, useMemo, useState } from "react";
import { GameResults, StartGamePage } from "../../components";
import { GamesId } from "../../constants/games";
import { GameCategories } from "../../interfaces/Categories";
import { GameStatus, ResultData } from "../../interfaces/GameInterface";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import { addAttempt } from "../../store/user/user.actions";
import styles from "./ColorMatchGame.module.scss";
import { Game } from "./components/Game/Game";
import { Rules } from "./components/Rules/Rules";

export const ColorMatchGame: FC<PropsWithChildren> = () => {
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
        gameId: 1,
        category: GameCategories.CONCENTRATION,
        date: new Date().toISOString(),
        neurons: result.neurons,
      },
    };
    dispatch(addAttempt(newAttempt));
    setResultData(result);
  };

  return (
    <>
      {gameStatus === "init" && (
        <div className={cn(styles.game_container)}>
          <Rules onClick={startTraining} isGameInit={gameStatus === "init"} />
        </div>
      )}
      {gameStatus === "started" && (
        <div className={cn(styles.game_container)}>
          <StartGamePage>
            <Rules onClick={startTraining} isGameInit={false} />
            <Game finishGame={finishGame} />
          </StartGamePage>
        </div>
      )}
      {gameStatus === "finish" && resultData && (
        <GameResults
          id={GamesId.FIRST}
          userNeurons={neurons}
          resultData={resultData}
          newGameHandler={startTraining}
        />
      )}
    </>
  );
};
