import { Link, useMatch } from "react-router-dom";
import cn from "classnames";
import { DetailedHTMLProps, FC, LinkHTMLAttributes, PropsWithChildren } from "react";
import styles from "./NavigationItem.module.scss";

interface NavItemProps
  extends DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
  children: string;
  to: string;
  isOpenAccPopup?: boolean;
  onClick?: () => void;
}

export const NavigationItem: FC<PropsWithChildren<NavItemProps>> = ({
  children,
  to,
  isOpenAccPopup,
  onClick,
}: NavItemProps) => {
  const match = useMatch(to);

  return (
    <li>
      <Link
        to={to}
        className={cn(!isOpenAccPopup ? styles.nav_item : styles.nav_item_menu)}
        onClick={onClick}
        style={{ color: match && isOpenAccPopup ? "var(--popup-contrast-color)" : "" }}
      >
        {children}
      </Link>
    </li>
  );
};
