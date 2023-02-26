/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { ReactSVG } from "react-svg";
import styles from "./Achieve.module.scss";
import placeholder from "../../../assets/images/Achieves/unknown.svg";
import { AchieveInterface } from "../types";
import closeIcon from "../../../assets/images/Achieves/close-icon.svg";

interface AchieveProps {
  achieve: AchieveInterface;
  isAchieveOpen: boolean;
}

export const Achieve: FC<AchieveProps> = ({ achieve, isAchieveOpen }) => {
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const toggleDescription = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div
        onClick={toggleDescription}
        className={isPopupOpen ? cn(styles.container, styles.container_open) : styles.container}
      >
        <img src={isAchieveOpen ? achieve.image : placeholder} alt={achieve.name} />
        <p className={isAchieveOpen ? cn(styles.name, styles.name_open) : styles.name}>
          {t(achieve.name)}
        </p>
      </div>
      <div className={isPopupOpen ? cn(styles.popup, styles.popup_open) : styles.popup}>
        <button type="button" onClick={toggleDescription} className={styles.close_btn}>
          <ReactSVG src={closeIcon} />
        </button>
        <p> {t(achieve.name)}</p>
        <img src={isAchieveOpen ? achieve.image : placeholder} alt={achieve.name} />
        <p className={styles.popup__title}>{t("achieves.howToGet")}</p>
        <p>{t(achieve.description)}</p>
      </div>
    </>
  );
};
