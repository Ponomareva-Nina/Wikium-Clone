import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";
import { AccountNav } from "../UI";

import { THEME } from "./types";
import styles from "./UserMenu.module.scss";
import { NavigationList } from "../NavigationList/NavigationList";
import { useViewport } from "../../utils/useViewport";
import { BREAKPOINT } from "../../constants/constants";

const root = document.querySelector(":root") as HTMLElement;
const currentTheme = localStorage.getItem("theme");
root.className = currentTheme === THEME.DARK ? THEME.DARK : THEME.LIGHT;

interface UserMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpenAccPopup?: boolean;
  onClick?: () => void;
}

export const UserMenu: FC<PropsWithChildren<UserMenuProps>> = ({ isOpenAccPopup, onClick }) => {
  const { width } = useViewport();

  return (
    <div className={isOpenAccPopup ? styles.container__open : styles.container}>
      {width <= BREAKPOINT && <NavigationList onClick={onClick} isOpenAccPopup={isOpenAccPopup} />}
      <AccountNav onClick={onClick} isOpenAccPopup={isOpenAccPopup} />
    </div>
  );
};
