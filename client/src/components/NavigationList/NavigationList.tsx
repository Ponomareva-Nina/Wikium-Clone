import { useTranslation } from "react-i18next";
import cn from "classnames";
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";
import { NavigationItem } from "./NavigationItem/NavigationItem";
import styles from "./NavigationList.module.scss";
import { useViewport } from "../../utils/useViewport";

interface NavListProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  isOpenAccPopup?: boolean;
  onClick?: () => void;
}

export const NavigationList: FC<PropsWithChildren<NavListProps>> = ({
  onClick,
  isOpenAccPopup,
}: NavListProps) => {
  const { t } = useTranslation();
  const { width } = useViewport();

  return (
    <nav className={cn(width > 800 ? styles.navigation : styles.menu_navigation)}>
      <ul className={cn(width > 800 ? styles.nav_list : styles.nav_list_menu)}>
        <NavigationItem to="/games" onClick={onClick} isOpenAccPopup={isOpenAccPopup}>
          {t("navigation.game")}
        </NavigationItem>
        <NavigationItem to="/stats" onClick={onClick} isOpenAccPopup={isOpenAccPopup}>
          {t("navigation.stat")}
        </NavigationItem>
      </ul>
    </nav>
  );
};
