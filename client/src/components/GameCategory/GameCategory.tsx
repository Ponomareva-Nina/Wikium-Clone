import { FC, PropsWithChildren } from "react";
import cn from "classnames";
import { ReactSVG } from "react-svg";
import styles from "./GameCategory.module.scss";
import { GameInterface } from "../../interfaces/GameInterface";
import { GameTeaserCard } from "../GameTeaserCard/GameTeaserCard";

interface GameCategoryProps {
  title: string;
  description: string;
  icon?: string;
  games: Array<GameInterface>;
}

export const GameCategory: FC<PropsWithChildren<GameCategoryProps>> = ({
  title,
  games,
  icon = "",
  description,
}) => (
  <section className={cn(styles.category__container)}>
    <h2 className={cn(styles.title)}>
      <ReactSVG src={icon} />
      {title}
    </h2>
    <p>{description}</p>
    <div className={cn(styles.games)}>
      {games.map((game) => (
        <GameTeaserCard key={game.id} game={game} />
      ))}
    </div>
  </section>
);
