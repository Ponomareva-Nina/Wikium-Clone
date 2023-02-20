import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { useViewport } from "../../utils/useViewport";
import { NavigationList } from "../NavigationList/NavigationList";
import { Account } from "../UserMenu/Account/Account";
import styles from "./Header.module.scss";
import { BREAKPOINT } from "../../constants/constants";
import { Logo } from "../UI";

interface HeaderProps {
  isAuth?: boolean;
  setIsAuth?: () => void;
}

export const Header: FC<PropsWithChildren<HeaderProps>> = ({ isAuth, setIsAuth }) => {
  const { width } = useViewport();

  return (
    <header className={cn(styles.header)}>
      {!isAuth && (
        <div className={cn(styles.wrapper)}>
          <div className={cn(styles.logo_container)}>
            <Logo />
          </div>
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
