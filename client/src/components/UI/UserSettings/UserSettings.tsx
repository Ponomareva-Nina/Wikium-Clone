import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { THEME } from "./types";
import { LANGUAGES } from "../../../translation/types";
import { Button } from "../Button/Button";
import styles from "./UserSettings.module.scss";

const root = document.querySelector(":root") as HTMLElement;
const currentTheme = localStorage.getItem("theme") || THEME.LIGHT;
root.className = currentTheme;

interface UserSettingsProps {}

export const UserSettings: FC<UserSettingsProps> = () => {
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
    <div className={styles.container}>
      <div className={styles.item}>
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
        <button
          type="button"
          className={
            activeThemeBtn === THEME.LIGHT
              ? cn(styles.theme_btn, styles.light, styles.roll_left)
              : cn(styles.theme_btn, styles.dark, styles.roll_right)
          }
          onClick={activeThemeBtn === THEME.LIGHT ? setThemeDark : setThemeLight}
          aria-label={t("menu.theme") || ""}
        />
      </div>
    </div>
  );
};
