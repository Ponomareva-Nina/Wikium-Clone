import { FC, PropsWithChildren } from "react";
import cn from "classnames";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactSVG } from "react-svg";
import styles from "./GameCategory.module.scss";

interface GameCategoryProps {
  title: string;
  description: string;
  icon?: string;
}

export const GameCategory: FC<PropsWithChildren<GameCategoryProps>> = ({
  title,
  icon = "",
  description,
  children,
}) => {
  return (
    <section className={cn(styles.category__container)}>
      <h2 className={cn(styles.title)}>
        <ReactSVG src={icon} />
        {title}
      </h2>
      <p>{description}</p>
      <div className={cn(styles.games)}>{children}</div>
    </section>
  );
};
