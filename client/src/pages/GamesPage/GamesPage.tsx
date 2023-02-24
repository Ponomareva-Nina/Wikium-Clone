import { useTranslation } from "react-i18next";
import cn from "classnames";
import { GameCategory } from "../../components/GameCategory/GameCategory";
import styles from "./GamesPage.module.scss";
import concentration from "../../assets/images/GamesPage/concentration.svg";
import logics from "../../assets/images/GamesPage/logics.svg";
import memory from "../../assets/images/GamesPage/memory.svg";
import { games } from "../../constants/gamesData";
import { GameCategories } from "../../interfaces/Categories";

const concentrationGames = games.filter((game) => game.category === GameCategories.CONCENTRATION);
const memoryGames = games.filter((game) => game.category === GameCategories.MEMORY);
const logicsGames = games.filter((game) => game.category === GameCategories.LOGICS);

const categories = [
  {
    title: "gamesPage.concentrationTitle",
    icon: concentration,
    description: "gamesPage.concentrationDescription",
    games: concentrationGames,
  },
  {
    title: "gamesPage.memoryTitle",
    icon: memory,
    description: "gamesPage.memoryDescription",
    games: memoryGames,
  },
  {
    title: "gamesPage.logicsTitle",
    icon: logics,
    description: "gamesPage.logicsDescription",
    games: logicsGames,
  },
];

export const GamesPage = () => {
  const { t } = useTranslation();

  return (
    <div className={cn("wrapper", styles.page)}>
      <h1 className={styles.page_title}>{t("gamesPage.title")}</h1>
      {categories.map(({ title, icon, description, games: categoryGames }) => (
        <GameCategory
          key={title}
          title={t(title)}
          description={t(description)}
          icon={icon}
          games={categoryGames}
        />
      ))}
    </div>
  );
};
