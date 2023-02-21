import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { THEME } from "./types";
import { LANGUAGES } from "../../../translation/types";
import ruFlag from "../../../assets/images/Menu/ru-flag.svg";
import enFlag from "../../../assets/images/Menu/us-flag.svg";
import styles from "./UserSettings.module.scss";

const root = document.querySelector(":root") as HTMLElement;
const currentTheme = localStorage.getItem("theme") || THEME.LIGHT;
root.className = currentTheme;

interface UserSettingsProps {}

export const UserSettings: FC<UserSettingsProps> = () => {
  const { t, i18n } = useTranslation();
  const [activeThemeBtn, setActiveThemeBtn] = useState(currentTheme || THEME.LIGHT);
  const [selectIsOpen, setSelectIsOpen] = useState(false);

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

  const toggleLanguageSelect = () => {
    setSelectIsOpen(!selectIsOpen);
  };

  return (
    <div className={styles.container}>
      <div className={cn(styles.item, styles.custom_select)}>
        <button type="button" className={styles.select_field} onClick={toggleLanguageSelect}>
          <img
            src={i18n.language === LANGUAGES.RU ? ruFlag : enFlag}
            alt={t("menu.language") || ""}
          />
          <span className={styles.arrow} />
        </button>
        <ul className={selectIsOpen ? cn(styles.options, styles.options_open) : styles.options}>
          <li className={styles.option}>
            <img src={enFlag} alt={LANGUAGES.EN} />
            {LANGUAGES.EN}
          </li>
          <li className={styles.option}>
            <img src={ruFlag} alt={LANGUAGES.RU} />
            {LANGUAGES.RU}
          </li>
        </ul>
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
