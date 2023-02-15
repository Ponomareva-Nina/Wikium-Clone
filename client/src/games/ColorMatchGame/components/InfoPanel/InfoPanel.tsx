import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { LEVEL, LevelNumber } from "../../data";
import styles from "./InfoPanel.module.scss";

interface InfoPanelProps {
  timer: any;
  currentLevel: number;
  points: number;
}

export const InfoPanel: FC<PropsWithChildren<InfoPanelProps>> = ({
  timer,
  currentLevel,
  points,
}) => {
  return (
    <div className={cn(styles.info_container)}>
      <div className={cn(styles.item_container)}>
        <span className={cn(styles.item_title)}>время</span>
        <span className={cn(styles.item_content)}>{timer}</span>
      </div>
      <div className={cn(styles.item_container)}>
        <span className={cn(styles.item_title)}>уровень</span>
        <span className={cn(styles.item_content)}>
          {`${currentLevel}-${LEVEL[LevelNumber.THREE].level}`}
        </span>
      </div>
      <div className={cn(styles.item_container)}>
        <span className={cn(styles.item_title)}>очки</span>
        <span className={cn(styles.item_content)}>{points}</span>
      </div>
    </div>
  );
};
