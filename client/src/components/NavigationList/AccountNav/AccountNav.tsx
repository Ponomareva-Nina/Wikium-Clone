import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { NavigationItem } from "../NavigationItem/NavigationItem";
import styles from "./AccountNav.module.scss";

interface AccountNavProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  isOpenAccPopup?: boolean;
  onClick?: () => void;
}

export const AccountNav: FC<PropsWithChildren<AccountNavProps>> = ({ onClick, isOpenAccPopup }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.container)}>
      <NavigationItem to="/account" onClick={onClick} isOpenAccPopup={isOpenAccPopup}>
        {t("navigation.account")}
      </NavigationItem>

      <NavigationItem to="/" onClick={onClick} isOpenAccPopup={isOpenAccPopup}>
        {t("navigation.logout")}
      </NavigationItem>
    </div>
  );
};
