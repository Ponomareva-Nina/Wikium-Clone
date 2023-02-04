import cn from "classnames";
import { NavigationList } from "../NavigationList/NavigationList";
import { AccountLogo } from "../UI";
import styles from "./Menu.module.scss";

type MenuProps = {
  isOpenAcc: boolean;
  isOpenMenu: boolean;
  onClickAcc: () => void;
  onClickMenu: () => void;
};

export const Menu = ({ onClickAcc, isOpenAcc, onClickMenu, isOpenMenu }: MenuProps) => {
  return (
    <div className={cn(isOpenMenu ? styles.menu__open : styles.menu)}>
      {isOpenMenu && (
        <AccountLogo onClick={onClickAcc} isOpen={isOpenAcc} isOpenMenu={isOpenMenu} />
      )}
      <NavigationList onClick={onClickMenu} isOpen={isOpenMenu} />
    </div>
  );
};
