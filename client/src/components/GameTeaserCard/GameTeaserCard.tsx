import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import styles from "./GameTeaserCard.module.scss";

interface GameTeaserCardProps {
  id: number;
  title: string;
  category: string;
}

export const GameTeaserCard: FC<PropsWithChildren<GameTeaserCardProps>> = ({
  id,
  title,
  category,
  children,
  ...rest
}) => {
  return (
    <Link to={`/games/${id}`}>
      <div {...rest} className={cn(styles.card)}>
        <h3 className={cn(styles.title)}>{title}</h3>
        <p className={cn(styles.category)}>{category}</p>
        {children}
      </div>
    </Link>
  );
};
