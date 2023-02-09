import { Link, useMatch } from "react-router-dom";
import cn from "classnames";
import { DetailedHTMLProps, FC, LinkHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import styles from "./NavigationItem.module.scss";

interface NavItemProps
  extends DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
  children: string | ReactNode;
  to: string;
  onClick?: () => void;
  target?: "_blank";
}

export const NavigationItem: FC<PropsWithChildren<NavItemProps>> = ({
  children,
  to,
  onClick,
  target,
}: NavItemProps) => {
  const match = useMatch(to);

  return (
    <li>
      <Link
        to={to}
        target={target}
        className={cn(styles.nav_item)}
        onClick={onClick}
        style={{ color: match ? "var(--font-secondary-color)" : "" }}
      >
        {children}
      </Link>
    </li>
  );
};
