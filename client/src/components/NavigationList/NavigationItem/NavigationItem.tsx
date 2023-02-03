import { Link, useMatch } from "react-router-dom";
import cn from "classnames";
import styles from "./NavigationItem.module.scss";

export const NavigationItem = ({ children, to }: { children: string; to: string }) => {
  const match = useMatch(to);
  return (
    <li>
      <Link
        to={to}
        className={cn(styles.nav_item)}
        style={{ color: match ? "var(--font-secondary-color)" : "" }}
      >
        {children}
      </Link>
    </li>
  );
};
