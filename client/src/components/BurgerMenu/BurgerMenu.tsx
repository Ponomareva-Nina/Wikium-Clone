import cn from "classnames";
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import { NavigationList } from "../NavigationList/NavigationList";
import { AccountLogo, Burger } from "../UI";
import styles from "./BurgerMenu.module.scss";

export const BurgerMenu: FC<PropsWithChildren> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleBurgerClick = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const burgerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement;
      if (menuRef.current && burgerRef.current) {
        if (!menuRef.current.contains(target) && !burgerRef.current.contains(target))
          setIsMenuOpen(false);
      }
    };

    document.body.addEventListener("mousedown", handler);
    return () => document.body.removeEventListener("mousedown", handler);
  });

  return (
    <div ref={menuRef}>
      <div ref={burgerRef}>
        <Burger onClick={toogleBurgerClick} isOpen={isMenuOpen} />
      </div>
      <div className={cn(isMenuOpen ? styles.menu__open : styles.menu)}>
        {isMenuOpen && <AccountLogo isOpenMenu={isMenuOpen} />}
        <NavigationList onClick={toogleBurgerClick} isOpen={isMenuOpen} />
      </div>
    </div>
  );
};
