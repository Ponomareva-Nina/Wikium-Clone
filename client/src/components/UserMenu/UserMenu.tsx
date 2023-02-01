import { useTranslation } from "react-i18next";
import { Button } from "../UI";
import { LANGUAGES, THEME } from "./types";

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
    <>
      <div>{t("menu.language")}:</div>
      <Button btnSize="small" onClick={() => i18n.changeLanguage(LANGUAGES.EN)}>
        {LANGUAGES.EN}
      </Button>
      <Button btnSize="small" onClick={() => i18n.changeLanguage(LANGUAGES.RU)}>
        {LANGUAGES.RU}
      </Button>

      <div>{t("menu.theme")}:</div>
      <Button btnSize="small" onClick={() => setThemeLight()}>
        {THEME.LIGHT}
      </Button>
      <Button btnSize="small" onClick={() => setThemeDark()}>
        {THEME.DARK}
      </Button>
    </>
  );
};
