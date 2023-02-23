import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { NavigationItem } from "../NavigationItem/NavigationItem";
import styles from "./AccountNav.module.scss";

interface AccountNavProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  isOpenAccPopup?: boolean;
  onClick?: () => void;
  logoutHandler?: () => void;
}

export const AccountNav: FC<PropsWithChildren<AccountNavProps>> = ({
  onClick,
  isOpenAccPopup,
  logoutHandler,
}) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.container)}>
      <NavigationItem to="/account" onClick={onClick} isOpenAccPopup={isOpenAccPopup}>
        {t("navigation.account")}
      </NavigationItem>

      <NavigationItem to="/" onClick={logoutHandler} isOpenAccPopup={isOpenAccPopup}>
        {t("navigation.logout")}
      </NavigationItem>

      <NavigationItem to="/team" onClick={onClick} isOpenAccPopup={isOpenAccPopup}>
        {t("footer.about")}
      </NavigationItem>
    </div>
  );
};
