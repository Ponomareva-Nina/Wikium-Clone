import { FC, PropsWithChildren, useCallback, useState } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import styles from "./GameLayout.module.scss";
import { GameInterface } from "../../interfaces/GameInterface";
import { GameInfoCard } from "./components/GameInfoCard/GameInfoCard";

interface GameLayoutProps {
  game: GameInterface;
}

export const GameLayout: FC<PropsWithChildren<GameLayoutProps>> = ({ children, game }) => {
  const [isStartGame, setIsStartGame] = useState<boolean>(false);
  const { t } = useTranslation();

  const startGameHandler = useCallback(() => {
    setIsStartGame(true);
  }, []);

  return (
    <div className={cn("wrapper", styles.container)}>
      <div className={styles.left}>
        {isStartGame ? children : <GameInfoCard game={game} startGameHandler={startGameHandler} />}
      </div>
      <div className={styles.right}>
        <h3>{t("gameLayout.descriptionTitle")}</h3>
        <div className={styles.description}>{t(game.description)}</div>
      </div>
    </div>
  );
};
