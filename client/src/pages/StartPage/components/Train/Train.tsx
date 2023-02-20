import cn from "classnames";
import { t } from "i18next";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactSVG } from "react-svg";
import { FC, PropsWithChildren } from "react";
import { Button, Logo } from "../../../../components/UI";
import styles from "./Train.module.scss";
import arrow from "../../../../assets/images/StartPage/arrow-down.svg";

export const Train: FC<PropsWithChildren> = () => {
  const listPage = (): void => {
    const startPage = document.getElementById("startPage");
    if (startPage) startPage.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={cn(styles.header_start)}>
      <div className={cn(styles.wrapper, styles.header_start__wrapper)}>
        <div className={cn(styles.logo_container)}>
          <Logo />
        </div>
        <div className={cn(styles.central_container)}>
          <div className={cn(styles.title_container)}>
            <h1 className={cn(styles.title)}>{t("header.title")}</h1>
            <p className={cn(styles.subtitle)}>{t("header.description")}</p>
          </div>
          <div className={cn(styles.buttons_container)}>
            <NavLink to="/register">
              <Button btnSize="huge" appearance="initial">
                {t("header.start")}
              </Button>
            </NavLink>
            <NavLink to="/auth" className={cn(styles.link)}>
              {t("header.haveAccount")}
            </NavLink>
          </div>
        </div>
        <button onClick={listPage} className={cn(styles.link_bottom)} type="button">
          <ReactSVG src={arrow} />
        </button>
      </div>
    </div>
  );
};
