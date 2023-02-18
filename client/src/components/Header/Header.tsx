import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useViewport } from "../../utils/useViewport";
import { NavigationList } from "../NavigationList/NavigationList";
import { Account } from "../UserMenu/Account/Account";
import { Button, Logo } from "../UI";
import styles from "./Header.module.scss";
import { BREAKPOINT } from "../../constants/constants";
import { useAppSelector } from "../../store/redux-hooks";

export const Header: FC<PropsWithChildren> = () => {
  const user = useAppSelector((state) => state.user.entity);
  const navigate = useNavigate();

  const { width } = useViewport();
  const { t } = useTranslation();

  const signInHandler = () => {
    navigate("auth");
  };

  return (
    <header className={cn(styles.header)}>
      <div className={cn(styles.header__wrapper, styles.wrapper)}>
        <div className={cn(styles.header_container)}>
          <Logo />
          {user && width > BREAKPOINT && <NavigationList />}
        </div>
        {!user && (
          <Button onClick={signInHandler} appearance="neutral">
            {t("signIn")}
          </Button>
        )}
        {user && <Account user={user} />}
      </div>
    </header>
  );
};
