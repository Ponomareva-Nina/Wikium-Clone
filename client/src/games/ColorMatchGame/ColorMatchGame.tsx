import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/UI";
import styles from "./ColorMatchGame.module.scss";

export const ColorMatchGame = () => {
  const { t } = useTranslation();

  const playNext = () => {
    console.log("Lets play");
  };

  return (
    <div className={cn(styles.container, styles.wrapper)}>
      <div className={cn(styles.game_container)}>
        <Button onClick={playNext}>{t("gamesData.startGame")}</Button>
      </div>
    </div>
  );
};
