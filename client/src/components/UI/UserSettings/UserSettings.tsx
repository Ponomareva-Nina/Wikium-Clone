//* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useEffect, useRef, useState } from "react";
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
  const LangOptionsRef = useRef<HTMLUListElement | null>(null);
  const LangButtonRef = useRef<HTMLDivElement | null>(null);

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

  const handleSelectLangClick = () => {
    setSelectIsOpen(!selectIsOpen);
  };

  const setLanguageEn = () => {
    i18n.changeLanguage(LANGUAGES.EN);
    setSelectIsOpen(false);
  };

  const setLanguageRu = () => {
    i18n.changeLanguage(LANGUAGES.RU);
    setSelectIsOpen(false);
  };

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLButtonElement;
      if (LangButtonRef.current && LangOptionsRef.current) {
        if (!LangButtonRef.current.contains(target) && !LangOptionsRef.current.contains(target)) {
          setSelectIsOpen(false);
        }
      }
    };
    document.body.addEventListener("mousedown", handler);
    return () => document.body.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={styles.container}>
      <div ref={LangButtonRef} className={cn(styles.item, styles.custom_select)}>
        <button type="button" className={styles.select_field} onClick={handleSelectLangClick}>
          <img
            src={i18n.language === LANGUAGES.RU ? ruFlag : enFlag}
            alt={t("menu.language") || ""}
          />
          <span className={selectIsOpen ? cn(styles.arrow, styles.arrow_active) : styles.arrow} />
        </button>
        <ul
          ref={LangOptionsRef}
          className={selectIsOpen ? cn(styles.options, styles.options_open) : styles.options}
        >
          <li>
            <button type="button" className={styles.option} onClick={setLanguageEn}>
              <img src={enFlag} alt={LANGUAGES.EN} />
              {LANGUAGES.EN}
            </button>
          </li>
          <li>
            <button type="button" className={styles.option} onClick={setLanguageRu}>
              <img src={ruFlag} alt={LANGUAGES.RU} />
              {LANGUAGES.RU}
            </button>
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
