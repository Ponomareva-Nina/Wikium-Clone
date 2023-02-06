import { Link } from "react-router-dom";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { FC, PropsWithChildren } from "react";
import logo from "../../../assets/images/Logo/logo.png";
import styles from "./Logo.module.scss";
// import { LANGUAGES } from "../../../translation/types";

export const Logo: FC<PropsWithChildren> = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Link to="/" className={cn(styles.logo_link)}>
        <img className={cn(styles.img_link)} src={logo} alt={`${t("logo.alt")}`} />
        <span className={cn(styles.title)}>{t("logo.title")}</span>
      </Link>
    </div>
  );
};
