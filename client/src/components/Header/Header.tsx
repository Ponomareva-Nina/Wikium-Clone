import cn from "classnames";
import { useState } from "react";
import { Menu } from "../Menu/Menu";
import { NavigationList } from "../NavigationList/NavigationList";
import { Logo, AccountLogo, Burger } from "../UI";
import styles from "./Header.module.scss";

export const Header = () => {
  const auth = true;

  const [isOpenAccPopup, setIsOpenAccPopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hadleAccountClick = (): void => {
    console.log("toogle Account Popup");
    setIsOpenAccPopup((prev) => !prev);
  };

  const toogleBurgerClick = (): void => {
    console.log("burger");
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={cn(styles.header)}>
      {!auth && <Logo />}
      <Menu
        onClickAcc={hadleAccountClick}
        isOpenAcc={isOpenAccPopup}
        onClickMenu={toogleBurgerClick}
        isOpenMenu={isMenuOpen}
      />
      {auth && (
        <div className={cn(styles.header__wrapper, styles.wrapper)}>
          <div className={cn(styles.header_container)}>
            <Logo />
            <Burger onClick={toogleBurgerClick} isOpen={isMenuOpen} />
            <NavigationList onClick={toogleBurgerClick} isOpen={isOpenAccPopup} />
          </div>
          <AccountLogo onClick={hadleAccountClick} isOpen={isOpenAccPopup} />
        </div>
      )}
    </header>
  );
};
