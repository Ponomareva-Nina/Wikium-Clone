// import styles from "./NavigationList.module.scss";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { NavigationItem } from "../NavigationItem/NavigationItem";
import styles from "./NavigationList.module.scss";

export const NavigationList = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul className={cn(styles.nav_list)}>
        <NavigationItem to="/program">{t("navigation.program")}</NavigationItem>
        <NavigationItem to="/game">{t("navigation.game")}</NavigationItem>
        <NavigationItem to="/stats">{t("navigation.stat")}</NavigationItem>
        <NavigationItem to="/achievements">{t("navigation.achievement")}</NavigationItem>
      </ul>
    </nav>
  );
};
