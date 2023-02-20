import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";
import { AccountNav } from "../NavigationList/AccountNav/AccountNav";

import styles from "./UserMenu.module.scss";
import { NavigationList } from "../NavigationList/NavigationList";
import { useViewport } from "../../utils/useViewport";
import { BREAKPOINT } from "../../constants/constants";

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
