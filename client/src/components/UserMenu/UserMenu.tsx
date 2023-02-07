import { useTranslation } from "react-i18next";
import cn from "classnames";
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";
import { Button, AccountNav } from "../UI";
import { LANGUAGES } from "../../translation/types";
import { THEME } from "./types";
import styles from "./UserMenu.module.scss";
import { NavigationList } from "../NavigationList/NavigationList";
import { useViewport } from "../../utils/useViewport";

const root = document.querySelector(":root") as HTMLElement;
const currentTheme = localStorage.getItem("theme");
root.className = currentTheme === THEME.DARK ? THEME.DARK : THEME.LIGHT;

interface UserMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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

export const UserMenu: FC<PropsWithChildren<UserMenuProps>> = ({ isOpenAccPopup, onClick }) => {
  const { t, i18n } = useTranslation();
  const { width } = useViewport();

  return (
    <div className={isOpenAccPopup ? styles.container__open : styles.container}>
      {width <= 800 && <NavigationList onClick={onClick} isOpenAccPopup={isOpenAccPopup} />}
      <AccountNav onClick={onClick} isOpenAccPopup={isOpenAccPopup} />
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
    </div>
  );
};
