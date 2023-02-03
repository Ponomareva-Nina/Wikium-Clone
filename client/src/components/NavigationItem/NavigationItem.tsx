import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./NavigationItem.module.scss";

export const NavigationItem = ({ children, to }: { children: string; to: string }) => {
  return (
    <Link to={to} className={cn(styles.nav_item)}>
      {children}
    </Link>
  );
};
