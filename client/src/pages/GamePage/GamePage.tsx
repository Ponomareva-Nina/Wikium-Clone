import { useTranslation } from "react-i18next";
import { GameCategory } from "../../components/GameCategory/GameCategory";
import styles from "./GamePage.module.scss";

export const GamePage = () => {
  const { t } = useTranslation();

  return (
    <div className="wrapper">
      <h1 className={styles.page_title}>{t("gamePage.title")}</h1>
      <GameCategory
        title={t("gamePage.concentrationTitle")}
        description={t("gamePage.concentrationDescription")}
      >
        <span>TO DO: delete this span after you add GameTeaserCard</span>
      </GameCategory>

      <GameCategory title={t("gamePage.memoryTitle")} description={t("gamePage.memoryDescription")}>
        <span>delete this span after you add GameTeaserCard</span>
      </GameCategory>

      <GameCategory title={t("gamePage.logicsTitle")} description={t("gamePage.logicsDescription")}>
        <span>delete this span after you add GameTeaserCard</span>
      </GameCategory>
    </div>
  );
};
