import cn from "classnames";
import { FC, PropsWithChildren, useEffect } from "react";
import styles from "./ScreenSaver.module.scss";

interface ScreenSaverProps {
  count: number;
  setCount: (number: number) => void;
}

export const ScreenSaver: FC<PropsWithChildren<ScreenSaverProps>> = ({
  children,
  count,
  setCount,
}) => {
  // const [count, setCount] = useState<number>(1);

  useEffect(() => {
    let TimerId: null | NodeJS.Timer = null;
    if (count < 4) {
      TimerId = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
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
      style={{ display: count === 4 ? "none" : "", backgroundImage: `url(${children})` }}
    >
      <span className={cn(styles.text)}>{count}</span>
    </div>
  );
};
