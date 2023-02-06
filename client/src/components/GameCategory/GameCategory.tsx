import { FC, PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./GameCategory.module.scss";

interface GameCategoryProps {
  title: string;
  description: string;
}

export const GameCategory: FC<PropsWithChildren<GameCategoryProps>> = ({
  title,
  description,
  children,
}) => {
  return (
    <section className={cn(styles.category__container)}>
      <h2 className={cn(styles.title)}>{title}</h2>
      <p>{description}</p>
      <div className={cn(styles.games)}>{children}</div>
    </section>
  );
};
