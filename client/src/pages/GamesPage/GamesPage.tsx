import { useTranslation } from "react-i18next";
import cn from "classnames";
import { GameCategory } from "../../components/GameCategory/GameCategory";
import styles from "./GamesPage.module.scss";
import { GameTeaserCard } from "../../components";
import concentration from "../../assets/images/GamesPage/concentration.svg";
import logics from "../../assets/images/GamesPage/logics.svg";
import memory from "../../assets/images/GamesPage/memory.svg";
import { Games } from "../../constants/Games";

export const GamesPage = () => {
  const { t } = useTranslation();

  return (
    <div className={cn("wrapper", styles.page)}>
      <h1 className={styles.page_title}>{t("gamesPage.title")}</h1>
      <GameCategory
        title={t("gamesPage.concentrationTitle")}
        icon={concentration}
        description={t("gamesPage.concentrationDescription")}
      >
        <GameTeaserCard game={Games.find((game) => game.id === 1)} />
      </GameCategory>

      <GameCategory
        title={t("gamesPage.memoryTitle")}
        icon={memory}
        description={t("gamesPage.memoryDescription")}
      >
        <GameTeaserCard game={Games.find((game) => game.id === 2)} />
      </GameCategory>

      <GameCategory
        title={t("gamesPage.logicsTitle")}
        icon={logics}
        description={t("gamesPage.logicsDescription")}
      >
        <GameTeaserCard game={Games.find((game) => game.id === 3)} />
      </GameCategory>
    </div>
  );
};
