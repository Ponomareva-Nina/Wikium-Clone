import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { NavigationList } from "../NavigationList/NavigationList";
import { Logo } from "../UI/Logo/Logo";
import { AccountLogo } from "../UI/AccountLogo/AccountLogo";
import styles from "./Header.module.scss";

export const Header: FC<PropsWithChildren> = () => {
  // TODO: add function to check if user login
  const auth = true;

  return (
    <header className={cn(styles.header)}>
      {!auth && <Logo />}
      {auth && (
        <>
          <BurgerMenu />
          <div className={cn(styles.header__wrapper, styles.wrapper)}>
            <div className={cn(styles.header_container)}>
              <Logo />
              <NavigationList />
            </div>
            <AccountLogo />
          </div>
        </>
      )}
    </header>
  );
};
