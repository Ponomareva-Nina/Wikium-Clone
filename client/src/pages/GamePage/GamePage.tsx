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
        <div>Game</div>
      </GameCategory>
    </>
  );
};
