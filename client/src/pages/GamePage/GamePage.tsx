import { useTranslation } from "react-i18next";
import cn from "classnames";
import { GameCategory } from "../../components/GameCategory/GameCategory";
import styles from "./GamePage.module.scss";
import { GameTeaserCard } from "../../components";
import colorMatchImg from "../../assets/images/GamePage/color-match.svg";

export const GamePage = () => {
  const { t } = useTranslation();

  return (
    <div className={cn("wrapper", styles.page)}>
      <h1 className={styles.page_title}>{t("gamePage.title")}</h1>
      <GameCategory
        title={t("gamePage.concentrationTitle")}
        description={t("gamePage.concentrationDescription")}
      >
        <GameTeaserCard id={0} title="Some Game" category="category" imgSrc={colorMatchImg} />
      </GameCategory>

      <GameCategory title={t("gamePage.memoryTitle")} description={t("gamePage.memoryDescription")}>
        <GameTeaserCard id={1} title="Some Game 2" category="category" imgSrc="" />
      </GameCategory>

      <GameCategory title={t("gamePage.logicsTitle")} description={t("gamePage.logicsDescription")}>
        <GameTeaserCard id={2} title="Some Game 3" category="category" imgSrc="" />
      </GameCategory>
    </div>
  );
};
