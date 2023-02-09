import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GameInterface } from "../../interfaces/GameInterface";
import styles from "./GameTeaserCard.module.scss";

interface GameTeaserCardProps {
  game?: GameInterface;
}

export const GameTeaserCard: FC<PropsWithChildren<GameTeaserCardProps>> = ({
  game,
  children,
  ...rest
}) => {
  const { t } = useTranslation();
  if (game) {
    return (
      <Link to={`/games/${game.id}`}>
        <div {...rest} className={cn(styles.card)}>
          <img src={game.teaserImg} className={cn(styles.image)} alt="" />
          <h3 className={cn(styles.title)}>{t(`gamesData.${game.title}`)}</h3>
          <p className={cn(styles.category)}>{t(`gamesData.${game.category}`)}</p>
          {children}
        </div>
      </Link>
    );
  }
  return <h1>Game in progress</h1>;
};
