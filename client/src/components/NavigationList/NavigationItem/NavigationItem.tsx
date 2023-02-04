import { NavLink, useMatch } from "react-router-dom";
import cn from "classnames";
import styles from "./NavigationItem.module.scss";

export const NavigationItem = ({
  children,
  to,
  onClick,
}: {
  children: string;
  to: string;
  onClick?: () => void;
}) => {
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
