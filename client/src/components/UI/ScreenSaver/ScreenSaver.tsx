import cn from "classnames";
import { FC, PropsWithChildren, useEffect } from "react";
import { TIMEOUT_ONE_SECOND } from "../../../constants/constants";
import styles from "./ScreenSaver.module.scss";
import { ScreenSaverCounter } from "./types/types";

interface ScreenSaverProps {
  count: number;
  setCount: (number: number) => void;
}

export const ScreenSaver: FC<PropsWithChildren<ScreenSaverProps>> = ({
  children,
  count,
  setCount,
}) => {
  useEffect(() => {
    let TimerId: null | NodeJS.Timer = null;
    if (count < ScreenSaverCounter.MAX_COUNTER) {
      TimerId = setTimeout(() => {
        setCount(count + 1);
      }, TIMEOUT_ONE_SECOND);
    }
    return () => {
      if (TimerId) {
        clearTimeout(TimerId);
      }
    };
  }, [count]);

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
