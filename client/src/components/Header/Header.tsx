import cn from "classnames";
import { useState } from "react";
import { NavigationList } from "../NavigationList/NavigationList";
import { Logo } from "../UI";
import { Avatar } from "../UI/AccountLogo/Avatar";
import styles from "./Header.module.scss";

export const Header = () => {
  const auth = true;

  const [isOpenAccPopup, setIsOpenAccPopup] = useState(false);

  const hadleAccountClick = (): void => {
    console.log("toogle Account Popup");
    setIsOpenAccPopup((prev) => !prev);
  };

  return (
    <header className={cn(styles.header)}>
      <div className={cn(styles.header__wrapper, styles.wrapper)}>
        <div className={cn(styles.header_container)}>
          <Logo />
          {auth && <NavigationList />}
        </div>
        <Avatar onClick={hadleAccountClick} isOpen={isOpenAccPopup} />
      </div>
    </header>
  );
};
