import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { NavigationItem } from "../NavigationItem/NavigationItem";

interface AccountNavProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  isOpenAccPopup?: boolean;
  onClick?: () => void;
}

export const AccountNav: FC<PropsWithChildren<AccountNavProps>> = ({ onClick, isOpenAccPopup }) => {
  const { t } = useTranslation();
  return (
    <div>
      <NavigationItem to="/account" onClick={onClick} isOpenAccPopup={isOpenAccPopup}>
        {t("navigation.account")}
      </NavigationItem>
      <NavigationItem to="/" onClick={onClick} isOpenAccPopup={isOpenAccPopup}>
        {t("navigation.logout")}
      </NavigationItem>
    </div>
  );
};
