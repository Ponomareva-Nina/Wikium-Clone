import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { NavigationList } from "../NavigationList/NavigationList";
import { Logo, AccountLogo } from "../UI";
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
          <div className={cn("wrapper", styles.header__wrapper, styles.wrapper)}>
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
