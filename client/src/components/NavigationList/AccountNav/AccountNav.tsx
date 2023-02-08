import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { NavigationItem } from "../NavigationItem/NavigationItem";
import styles from "./AccountNav.module.scss";
import { LANGUAGES } from "../../../translation/types";
import { Button } from "../../UI/Button/Button";
import { THEME } from "../../UserMenu/types";

const root = document.querySelector(":root") as HTMLElement;

interface AccountNavProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  isOpenAccPopup?: boolean;
  onClick?: () => void;
}

const setThemeLight = () => {
  localStorage.setItem("theme", THEME.LIGHT);
  root.className = THEME.LIGHT;
};

const setThemeDark = () => {
  localStorage.setItem("theme", THEME.DARK);
  root.className = THEME.DARK;
};

export const AccountNav: FC<PropsWithChildren<AccountNavProps>> = ({ onClick, isOpenAccPopup }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={cn(styles.container)}>
      <NavigationItem to="/account" onClick={onClick} isOpenAccPopup={isOpenAccPopup}>
        {t("navigation.account")}
      </NavigationItem>

      <div className={styles.item}>
        <p className={cn(styles.btn_description)}>{t("menu.language")}:</p>
        <Button
          btnSize="small"
          onClick={() => i18n.changeLanguage(LANGUAGES.EN)}
          appearance={i18n.resolvedLanguage === LANGUAGES.EN ? "normal" : "inactive"}
        >
          {LANGUAGES.EN}
        </Button>
        <Button
          btnSize="small"
          onClick={() => i18n.changeLanguage(LANGUAGES.RU)}
          appearance={i18n.resolvedLanguage === LANGUAGES.RU ? "normal" : "inactive"}
        >
          {LANGUAGES.RU}
        </Button>
      </div>

      <div className={styles.item}>
        <p className={cn(styles.btn_description)}>{t("menu.theme")}:</p>
        <Button btnSize="standart" onClick={() => setThemeLight()}>
          {THEME.LIGHT}
        </Button>
        <Button btnSize="standart" onClick={() => setThemeDark()}>
          {THEME.DARK}
        </Button>
      </div>

      <NavigationItem to="/" onClick={onClick} isOpenAccPopup={isOpenAccPopup}>
        {t("navigation.logout")}
      </NavigationItem>
    </div>
  );
};
