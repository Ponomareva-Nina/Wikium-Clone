import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import { Menu } from "../Menu/Menu";
import { NavigationList } from "../NavigationList/NavigationList";
import { Logo, AccountLogo, Burger } from "../UI";
import styles from "./Header.module.scss";

export const Header = () => {
  // TODO: add function to check if user login
  const auth = true;

  const [isOpenAccPopup, setIsOpenAccPopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hadleAccountClick = (): void => {
    setIsOpenAccPopup((prev) => !prev);
  };

  const toogleBurgerClick = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement;
      if (menuRef.current) {
        if (!menuRef.current.contains(target)) setIsMenuOpen(false);
      }
    };

    document.body.addEventListener("mousedown", handler);
    return () => document.body.removeEventListener("mousedown", handler);
  });

  return (
    <header className={cn(styles.header)}>
      {!auth && <Logo />}
      <div ref={menuRef}>
        <Menu
          onClickAcc={hadleAccountClick}
          isOpenAcc={isOpenAccPopup}
          onClickMenu={toogleBurgerClick}
          isOpenMenu={isMenuOpen}
        />
      </div>
      {auth && (
        <div className={cn(styles.header__wrapper, styles.wrapper)}>
          <div className={cn(styles.header_container)}>
            <Logo />
            <Burger onClick={toogleBurgerClick} isOpen={isMenuOpen} />
            {!isMenuOpen && <NavigationList />}
          </div>
          {!isMenuOpen && <AccountLogo onClick={hadleAccountClick} isOpen={isOpenAccPopup} />}
        </div>
      )}
    </header>
  );
};
