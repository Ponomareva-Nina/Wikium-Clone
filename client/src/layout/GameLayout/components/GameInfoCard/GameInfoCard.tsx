import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/UI";
import { GameInterface } from "../../../../interfaces/GameInterface";
import { SkillList } from "../SkillList/SkillList";
import styles from "./GameInfoCard.module.scss";

interface GameInfoCardProps {
  startGameHandler: () => void;
  game: GameInterface;
}

export const GameInfoCard: FC<GameInfoCardProps> = ({ startGameHandler, game }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.top}
        style={{ background: `url(${game.teaserImg}) center/cover no-repeat` }}
      >
        <div className={styles["game-info"]}>
          <h3>{t(game.title)}</h3>
          <div>{t(`gamesData.${game.category}`)}</div>
        </div>
      </div>
      <SkillList skills={game.skills} />
      <Button onClick={startGameHandler}>{t("gameLayout.startExercise")}</Button>
    </div>
  );
};
