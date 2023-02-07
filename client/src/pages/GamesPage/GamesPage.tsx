import { useTranslation } from "react-i18next";
import cn from "classnames";
import { GameCategory } from "../../components/GameCategory/GameCategory";
import styles from "./GamesPage.module.scss";
import { GameTeaserCard } from "../../components";
import colorMatchImg from "../../assets/images/GamePage/color-match.svg";
import penaltyImg from "../../assets/images/GamePage/penalty.svg";
import moreAndLessImg from "../../assets/images/GamePage/more-and-less.svg";

export const GamesPage = () => {
  const { t } = useTranslation();

  return (
    <div className={cn("wrapper", styles.page)}>
      <h1 className={styles.page_title}>{t("gamePage.title")}</h1>
      <GameCategory
        title={t("gamePage.concentrationTitle")}
        description={t("gamePage.concentrationDescription")}
      >
        <GameTeaserCard
          id={1}
          title={t("gamePage.colorMatchGame")}
          category={t("gamePage.concentrationTitle")}
          imgSrc={colorMatchImg}
        />
      </GameCategory>

      <GameCategory title={t("gamePage.memoryTitle")} description={t("gamePage.memoryDescription")}>
        <GameTeaserCard
          id={2}
          title={t("gamePage.penaltyGame")}
          category={t("gamePage.memoryTitle")}
          imgSrc={penaltyImg}
        />
      </GameCategory>

      <GameCategory title={t("gamePage.logicsTitle")} description={t("gamePage.logicsDescription")}>
        <GameTeaserCard
          id={3}
          title={t("gamePage.comparisonGame")}
          category={t("gamePage.logicsTitle")}
          imgSrc={moreAndLessImg}
        />
      </GameCategory>
    </div>
  );
};
