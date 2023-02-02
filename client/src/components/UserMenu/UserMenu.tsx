import { useTranslation } from "react-i18next";
import { Button } from "../UI";
import { LANGUAGES, THEME } from "./types";
import styles from "./UserMenu.module.scss";

const root = document.querySelector(":root") as HTMLElement;
const currentTheme = localStorage.getItem("theme");
root.className = currentTheme === THEME.DARK ? THEME.DARK : THEME.LIGHT;

const setThemeLight = () => {
  localStorage.setItem("theme", THEME.LIGHT);
  root.className = THEME.LIGHT;
};

const setThemeDark = () => {
  localStorage.setItem("theme", THEME.DARK);
  root.className = THEME.DARK;
};

export const UserMenu = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p>{t("menu.language")}:</p>
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
        <p>{t("menu.theme")}:</p>
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
