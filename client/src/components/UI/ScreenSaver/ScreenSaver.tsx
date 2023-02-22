import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import styles from "./ScreenSaver.module.scss";
import { ScreenSaverCounter } from "./types/types";

interface ScreenSaverProps {
  count: number;
}

export const ScreenSaver: FC<PropsWithChildren<ScreenSaverProps>> = ({ children, count }) => {
  return (
    <div
      className={cn(styles.container)}
      style={{
        display: count === ScreenSaverCounter.MAX_COUNTER ? "none" : "",
        backgroundImage: `url(${children})`,
      }}
    >
      <span className={cn(styles.text)}>{count}</span>
    </div>
  );
};
