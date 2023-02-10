import cn from "classnames";
// import { t } from "i18next";
import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ColorMatchGame.module.scss";
import { Rules } from "./components/Rules/Rules";
import { LEVEL } from "./date";

export const ColorMatchGame: FC<PropsWithChildren> = () => {
  const { t } = useTranslation();
  const playNext = () => {
    console.log("Lets play");
  };

  return (
    <div className={cn(styles.container, styles.wrapper)}>
      <div className={cn(styles.game_container)}>
        <Rules onClick={playNext} />
        {LEVEL.map((item) => {
          // console.log(t(item.words[0]));
          return item.words.map((word) => t(word));
        })}
      </div>
    </div>
  );
};
