import { NavLink, useMatch } from "react-router-dom";
import cn from "classnames";
import { DetailedHTMLProps, FC, LinkHTMLAttributes, PropsWithChildren } from "react";
import styles from "./NavigationItem.module.scss";

interface NavItemProps
  extends DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
  children: string;
  to: string;
  onClick?: () => void;
}

export const NavigationItem: FC<PropsWithChildren<NavItemProps>> = ({
  children,
  to,
  onClick,
}: NavItemProps) => {
  const match = useMatch(to);

  return (
    <li>
      <NavLink
        to={to}
        className={cn(styles.nav_item)}
        onClick={onClick}
        style={{ color: match ? "var(--font-secondary-color)" : "" }}
      >
        {children}
      </NavLink>
    </li>
  );
};
