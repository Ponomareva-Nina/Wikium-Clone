import { useTranslation } from "react-i18next";
import { achieves } from "./data";
import styles from "./Achieves.module.scss";
import { Achieve } from "./Achieve/Achieve";
import { useAppSelector } from "../../store/redux-hooks";
import { checkIsAchieveOpen } from "./utils";

export const AchievesPage = () => {
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.user.entity);

  return (
    <div className="wrapper">
      <h1 className={styles.title}>{t("achieves.pageTitle")}</h1>
      <div className={styles.achieves}>
        {achieves.map((achieve) => {
          const checkIfOpen = checkIsAchieveOpen(user, achieve.id);
          return <Achieve key={achieve.id} achieve={achieve} isAchieveOpen={checkIfOpen} />;
        })}
      </div>
    </div>
  );
};
