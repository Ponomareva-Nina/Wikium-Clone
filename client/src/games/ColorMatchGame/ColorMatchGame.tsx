import cn from "classnames";
import { time } from "console";
import { FC, PropsWithChildren, useMemo, useState } from "react";
import { GameResults } from "../../components";
import { ScreenSaver } from "../../components/UI";
import { ScreenSaverCounter } from "../../components/UI/ScreenSaver/types/types";
import { useCounter } from "../../hooks/useCounter";
import { GameStatus, ResultData } from "../../interfaces/GameInterface";
import { useAppSelector } from "../../store/redux-hooks";
import styles from "./ColorMatchGame.module.scss";
import { Game } from "./components/Game/Game";
import { Rules } from "./components/Rules/Rules";
import img from "./images/color-match-bg.png";

export const ColorMatchGame: FC<PropsWithChildren> = () => {
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
    <div className={cn(styles.container, styles.wrapper)}>
      <div className={cn(styles.game_container)}>
        {gameStatus !== "finish" && (
          <Rules onClick={startTraining} isGameInit={gameStatus === "init"} />
        )}
        {/* {gameStatus === "started" && timer !== 0 && <ScreenSaver count={timer}>{img}</ScreenSaver>} */}
        {gameStatus === "started" && <Game finishGame={finishGame} />}
        {gameStatus === "finish" && resultData && (
          <GameResults
            userNeurons={neurons}
            resultData={resultData}
            newGameHandler={startTraining}
          />
        )}
      </div>
    </div>
  );
};
