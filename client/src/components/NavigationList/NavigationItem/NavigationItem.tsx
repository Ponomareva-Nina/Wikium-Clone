import { Link, useMatch } from "react-router-dom";
import cn from "classnames";
import { DetailedHTMLProps, FC, LinkHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import styles from "./NavigationItem.module.scss";
import { ACCOUNT_ACTIVE_LINK_COLOR, HEADER_ACTIVE_LINK_COLOR } from "../../../constants/constants";

interface NavItemProps
  extends DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
  children: string | ReactNode;
  to: string;
  isOpenAccPopup?: boolean;
  onClick?: () => void;
  target?: "_blank";
}

export const NavigationItem: FC<PropsWithChildren<NavItemProps>> = ({
  children,
  to,
  isOpenAccPopup,
  onClick,
  target,
}: NavItemProps) => {
  const match = useMatch(to);

  const getMatchColor = () => {
    let color = "";
    if (match) {
      if (isOpenAccPopup) {
        return ACCOUNT_ACTIVE_LINK_COLOR;
      }
      color = HEADER_ACTIVE_LINK_COLOR;
    }
    return color;
  };

  return (
    <li>
      <Link
        to={to}
        className={cn(!isOpenAccPopup ? styles.nav_item : styles.nav_item_menu)}
        target={target}
        onClick={onClick}
        style={{
          color: getMatchColor(),
        }}
      >
        {children}
      </Link>
    </li>
  );
};
