import cn from "classnames";
import { FC, PropsWithChildren, useState } from "react";
import { ScreenSaver } from "../../components/UI";
import { ScreenSaverCounter } from "../../components/UI/ScreenSaver/types/types";
import styles from "./ColorMatchGame.module.scss";
import { Game } from "./components/Game/Game";
import { Rules } from "./components/Rules/Rules";
import img from "./images/color-match-bg.png";

export const ColorMatchGame: FC<PropsWithChildren> = () => {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [count, setCount] = useState<number>(ScreenSaverCounter.INITIAL_COUNTER);

  const playNext = (): void => {
    setIsGameStarted((prev) => !prev);
  };

  const handlePlayNext = (): void => {
    playNext();
  };

  return (
    <div className={cn(styles.container, styles.wrapper)}>
      <div className={cn(styles.game_container)}>
        <Rules onClick={handlePlayNext} isGameStarted={isGameStarted} />
        {isGameStarted && (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {count <= ScreenSaverCounter.DISPLAYED_COUNER ? (
              <ScreenSaver count={count} setCount={setCount}>
                {img}
              </ScreenSaver>
            ) : (
              <Game setIsGameStarted={setIsGameStarted} />
            )}
          </>
        )}
      </div>
    </div>
  );
};
