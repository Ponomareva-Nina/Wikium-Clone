import { useTranslation } from "react-i18next";
import { achieves } from "./data";
import styles from "./Achieves.module.scss";
import { Achieve } from "./Achieve/Achieve";

export const AchievesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="wrapper">
      <h1 className={styles.title}>{t("achieves.pageTitle")}</h1>
      <div className={styles.achieves}>
        {achieves.map((achieve) => {
          return <Achieve key={achieve.id} achieve={achieve} />;
        })}
      </div>
    </div>
  );
};
