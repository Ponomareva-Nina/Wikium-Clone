import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { useViewport } from "../../hooks/useViewport";
import { NavigationList } from "../NavigationList/NavigationList";
import { Account } from "../UserMenu/Account/Account";
import { Logo } from "../UI";
import styles from "./Header.module.scss";
import { BREAKPOINT } from "../../constants/constants";
import { useAppSelector } from "../../store/redux-hooks";
import { UserSettings } from "../UI/UserSettings/UserSettings";

export const Header: FC<PropsWithChildren> = () => {
  const user = useAppSelector((state) => state.user.entity);
  const { width } = useViewport();

  return (
    <header className={cn(styles.header)}>
      {!user && (
        <div className={cn(styles.wrapper)}>
          <div className={cn(styles.logo_container)}>
            <Logo />
            <UserSettings />
          </div>
        </div>
      )}
      {user && (
        <div className={cn(styles.header__wrapper, styles.wrapper)}>
          <div className={cn(styles.header_container)}>
            <Logo />
            {user && width > BREAKPOINT && <NavigationList />}
          </div>
          <UserSettings />
          <Account user={user} />
        </div>
      )}
    </header>
  );
};
