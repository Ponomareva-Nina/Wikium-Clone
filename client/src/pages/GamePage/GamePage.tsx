import { useTranslation } from "react-i18next";
import { GameCategory } from "../../components/GameCategory/GameCategory";

export const GamePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("gamePage.title")}</h1>
      <GameCategory
        title={t("gamePage.concentrationTitle")}
        description={t("gamePage.concentrationDescription")}
      >
        <span>TO DO: delete this span after you add GameTeaserCard</span>
      </GameCategory>
      <GameCategory title={t("gamePage.memoryTitle")} description={t("gamePage.memoryDescription")}>
        <span>TO DO: delete this span after you add GameTeaserCard</span>
      </GameCategory>
      <GameCategory title={t("gamePage.logicsTitle")} description={t("gamePage.logicsDescription")}>
        <span>TO DO: delete this span after you add GameTeaserCard</span>
      </GameCategory>
    </>
  );
};
