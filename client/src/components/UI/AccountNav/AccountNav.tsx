import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { NavigationItem } from "../../NavigationList/NavigationItem/NavigationItem";

interface AccountNavProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  onClick?: () => void;
}

export const AccountNav: FC<PropsWithChildren<AccountNavProps>> = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <div>
      <NavigationItem to="/account" onClick={onClick}>
        {t("navigation.account")}
      </NavigationItem>
      <NavigationItem to="/" onClick={onClick}>
        {t("navigation.logout")}
      </NavigationItem>
    </div>
  );
};
