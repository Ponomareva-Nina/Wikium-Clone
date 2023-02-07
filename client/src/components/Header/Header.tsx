import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { useViewport } from "../../utils/useViewport";
import { NavigationList } from "../NavigationList/NavigationList";
import { Account } from "../UI/Account/Account";
import { Logo } from "../UI/Logo/Logo";
import styles from "./Header.module.scss";

export const Header: FC<PropsWithChildren> = () => {
  // TODO: add function to check if user login
  const auth = true;

  const { width } = useViewport();

  return (
    <header className={cn(styles.header)}>
      {!auth && <Logo />}
      {auth && (
        <div className={cn(styles.header__wrapper, styles.wrapper)}>
          <div className={cn(styles.header_container)}>
            <Logo />
            {width > 800 && <NavigationList />}
          </div>
          <Account />
        </div>
      )}
    </header>
  );
};
