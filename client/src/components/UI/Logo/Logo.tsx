import { Link } from "react-router-dom";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import logoRu from "../../../assets/images/Logo/logo_ru.svg";
import logoEn from "../../../assets/images/Logo/logo_en.svg";
import styles from "./Logo.module.scss";
import { LANGUAGES } from "../../../translation/types";

export const Logo = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Link to="/" className={cn(styles.logo_link)}>
        <img
          className={cn(styles.img_link)}
          src={t("logo.lang") === LANGUAGES.RU ? logoRu : logoEn}
          alt="Викиум тренажёры для мозга"
        />
      </Link>
    </div>
  );
};
