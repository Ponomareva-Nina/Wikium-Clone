import { useTranslation } from "react-i18next";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./TrainItem.module.scss";
import { GameItem } from "../../../../interfaces/GameInterface";

interface TrainItemProps {
  train: GameItem;
}

export const TrainItem: FC<TrainItemProps> = ({ train }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.item}>
      <img className={styles.icon} src={train.game.gameIcon} alt="" />
      <Link to={`/games/${train.game.id}`}>
        <p className={styles.link}>{t(train.game.title)}</p>
      </Link>
      <p className={styles.times}>
        {train.attempts} {t("StatisticsPage.times")}
      </p>
    </div>
  );
};
