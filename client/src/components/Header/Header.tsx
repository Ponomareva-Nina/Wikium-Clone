import cn from "classnames";
import { FC, PropsWithChildren, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactSVG } from "react-svg";
import { useViewport } from "../../utils/useViewport";
import { NavigationList } from "../NavigationList/NavigationList";
import { Account } from "../UserMenu/Account/Account";
import { Button, Logo } from "../UI";
import styles from "./Header.module.scss";
import { BREAKPOINT } from "../../constants/constants";
import arrow from "../../assets/images/StartPage/arrow-down.svg";

export const Header: FC<PropsWithChildren> = () => {
  // TODO: add function to check if user login

  const [isAuth, setIsAuth] = useState<boolean>(false);
  const { t } = useTranslation();
  const { width } = useViewport();

  const logoutUser = (): void => {
    setIsAuth((prev) => !prev);
  };

  const listPage = (): void => {
    const startPage = document.getElementById("startPage");
    if (startPage) startPage.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={cn(isAuth ? styles.header : styles.header_start)}>
      {!isAuth && (
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
      )}
      {isAuth && (
        <div className={cn(styles.header__wrapper, styles.wrapper)}>
          <div className={cn(styles.header_container)}>
            <Logo />
            {width > BREAKPOINT && <NavigationList />}
          </div>
          <Account />
        </div>
      )}
    </header>
  );
};
