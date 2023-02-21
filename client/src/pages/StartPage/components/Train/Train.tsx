import { useTranslation } from "react-i18next";
import cn from "classnames";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactSVG } from "react-svg";
import { FC, PropsWithChildren } from "react";
import { Button } from "../../../../components/UI";
import styles from "./Train.module.scss";
import arrow from "../../../../assets/images/StartPage/arrow-down.svg";

interface TrainProps {
  isAuth?: boolean;
}

export const Train: FC<PropsWithChildren<TrainProps>> = ({ isAuth }) => {
  const { t } = useTranslation();
  const listPage = (): void => {
    const startPage = document.getElementById("startPage");
    if (startPage) startPage.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={cn(styles.header_start)}>
      <div className={cn(styles.wrapper, styles.header_start__wrapper)}>
        <div className={cn(styles.central_container)}>
          <div className={cn(styles.title_container)}>
            <h1 className={cn(styles.title)}>{t("header.title")}</h1>
            <p className={cn(styles.subtitle)}>{t("header.description")}</p>
          </div>
          <div className={cn(styles.buttons_container)}>
            <NavLink to={isAuth ? "/games" : "/register"}>
              <Button btnSize="huge" appearance="initial">
                {t("header.start")}
              </Button>
            </NavLink>
            {!isAuth && (
              <NavLink to="/auth" className={cn(styles.link)}>
                {t("header.haveAccount")}
              </NavLink>
            )}
          </div>
        </div>
        <button onClick={listPage} className={cn(styles.link_bottom)} type="button">
          <ReactSVG src={arrow} />
        </button>
      </div>
    </div>
  );
};
