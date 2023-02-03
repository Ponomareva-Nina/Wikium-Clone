// import styles from "./NavigationList.module.scss";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { NavigationItem } from "./NavigationItem/NavigationItem";
import styles from "./NavigationList.module.scss";

type NavListProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const NavigationList = ({ isOpen, onClick }: NavListProps) => {
  const { t } = useTranslation();

  return (
    <nav className={cn(!isOpen ? styles.navigation : styles.menu_nav)}>
      <ul className={cn(!isOpen ? styles.nav_list : styles.menu_nav_list)}>
        <NavigationItem to="/game" onClick={onClick}>
          {t("navigation.game")}
        </NavigationItem>
        <NavigationItem to="/stats" onClick={onClick}>
          {t("navigation.stat")}
        </NavigationItem>
        {isOpen && (
          <>
            <NavigationItem to="/account" onClick={onClick}>
              {t("navigation.account")}
            </NavigationItem>
            <NavigationItem to="/" onClick={onClick}>
              {t("navigation.logout")}
            </NavigationItem>
          </>
        )}
      </ul>
    </nav>
  );
};
