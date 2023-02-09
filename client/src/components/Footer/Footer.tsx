import cn from "classnames";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactSVG } from "react-svg";
import { NavigationItem } from "../NavigationList/NavigationItem/NavigationItem";
import styles from "./Footer.module.scss";
import rsLogo from "../../assets/images/Footer/rslogo.svg";
import { RS_LINK, YEAR } from "../../constants/constants";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={cn(styles.footer)}>
      <ul className={cn(styles.wrapper, styles.footer__wrapper)}>
        <NavigationItem to="/team">{t("footer.about")}</NavigationItem>
        <p className={cn(styles.year)}>{YEAR}</p>
        <NavigationItem to={RS_LINK} target="_blank">
          <div className={cn(styles.logo)}>
            <ReactSVG src={rsLogo} />
          </div>
        </NavigationItem>
      </ul>
    </footer>
  );
};
