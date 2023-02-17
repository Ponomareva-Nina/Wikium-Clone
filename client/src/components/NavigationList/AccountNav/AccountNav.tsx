import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, useState } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { NavigationItem } from "../NavigationItem/NavigationItem";
import styles from "./AccountNav.module.scss";
import { LANGUAGES } from "../../../translation/types";
import { Button } from "../../UI/Button/Button";
import { THEME } from "../../UserMenu/types";
import sunIcon from "../../../assets/images/Menu/sun.svg";
import moonIcon from "../../../assets/images/Menu/moon.svg";

const root = document.querySelector(":root") as HTMLElement;
const currentTheme = localStorage.getItem("theme") || THEME.LIGHT;
root.className = currentTheme;

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
  const { t, i18n } = useTranslation();
  const [activeThemeBtn, setActiveThemeBtn] = useState(currentTheme || THEME.LIGHT);

  const setThemeLight = () => {
    localStorage.setItem("theme", THEME.LIGHT);
    root.className = THEME.LIGHT;
    setActiveThemeBtn(THEME.LIGHT);
  };

  const setThemeDark = () => {
    localStorage.setItem("theme", THEME.DARK);
    root.className = THEME.DARK;
    setActiveThemeBtn(THEME.DARK);
  };

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
        <Button
          appearance={activeThemeBtn === THEME.LIGHT ? "normal" : "inactive"}
          btnSize="small"
          onClick={setThemeLight}
        >
          <img src={sunIcon} alt={THEME.DARK} />
        </Button>
        <Button
          btnSize="small"
          appearance={activeThemeBtn === THEME.DARK ? "normal" : "inactive"}
          onClick={setThemeDark}
        >
          <img src={moonIcon} alt={THEME.DARK} />
        </Button>
      </div>

      <NavigationItem to="/" onClick={logoutHandler} isOpenAccPopup={isOpenAccPopup}>
        {t("navigation.logout")}
      </NavigationItem>
    </div>
  );
};
