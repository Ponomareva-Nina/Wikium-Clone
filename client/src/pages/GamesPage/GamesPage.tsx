import { useTranslation } from "react-i18next";
import cn from "classnames";
import { GameCategory } from "../../components/GameCategory/GameCategory";
import styles from "./GamesPage.module.scss";
import { GameTeaserCard } from "../../components";
import colorMatchImg from "../../assets/images/GamesPage/color-match.svg";
import penaltyImg from "../../assets/images/GamesPage/penalty.svg";
import moreAndLessImg from "../../assets/images/GamesPage/more-and-less.svg";
import concentration from "../../assets/images/GamesPage/concentration.svg";
import logics from "../../assets/images/GamesPage/logics.svg";
import memory from "../../assets/images/GamesPage/memory.svg";

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
        <GameTeaserCard
          id={1}
          title={t("gamesPage.colorMatchGame")}
          category={t("gamesPage.concentrationTitle")}
          imgSrc={colorMatchImg}
        />
      </GameCategory>

      <GameCategory
        title={t("gamesPage.memoryTitle")}
        icon={memory}
        description={t("gamesPage.memoryDescription")}
      >
        <GameTeaserCard
          id={2}
          title={t("gamesPage.penaltyGame")}
          category={t("gamesPage.memoryTitle")}
          imgSrc={penaltyImg}
        />
      </GameCategory>

      <GameCategory
        title={t("gamesPage.logicsTitle")}
        icon={logics}
        description={t("gamesPage.logicsDescription")}
      >
        <GameTeaserCard
          id={3}
          title={t("gamesPage.comparisonGame")}
          category={t("gamesPage.logicsTitle")}
          imgSrc={moreAndLessImg}
        />
      </GameCategory>
    </div>
  );
};
