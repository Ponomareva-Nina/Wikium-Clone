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
    <section>
      <h2 className={cn(styles.title)}>{title}</h2>
      <p>{description}</p>
      {children}
    </section>
  );
};
