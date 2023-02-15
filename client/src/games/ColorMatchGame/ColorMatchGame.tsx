import cn from "classnames";
import { FC, PropsWithChildren, useState } from "react";
import { ScreenSaver } from "../../components/UI/ScreenSaver/ScreenSaver";
import styles from "./ColorMatchGame.module.scss";
import { Game } from "./components/Game/Game";
import { Rules } from "./components/Rules/Rules";
import img from "./images/color-match-bg.png";

export const ColorMatchGame: FC<PropsWithChildren> = () => {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  const playNext = (): void => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div className={cn(styles.container, styles.wrapper)}>
      <div className={cn(styles.game_container)}>
        <Rules
          onClick={() => {
            playNext();
          }}
          isGameStarted={isGameStarted}
        />
        {isGameStarted && (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {count <= 3 ? (
              <ScreenSaver count={count} setCount={setCount}>
                {img}
              </ScreenSaver>
            ) : (
              <Game />
            )}
          </>
        )}
      </div>
    </div>
  );
};
