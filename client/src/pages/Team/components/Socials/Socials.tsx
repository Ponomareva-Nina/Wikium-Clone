import { Link } from "react-router-dom";
import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import styles from "./Socials.module.scss";
import { LINK_BLANK } from "../../../../constants/constants";

interface SocialsProps {
  link: string;
}

export const Socials: FC<PropsWithChildren<SocialsProps>> = ({ link }) => {
  return (
    <ul className={cn(styles.socials_container)}>
      <li className={cn(styles.icon, styles.icon__github)}>
        <Link to={link} target={LINK_BLANK} />
      </li>
      <li className={cn(styles.icon, styles.icon__inst)}>
        <Link to={link} target={LINK_BLANK} />
      </li>
      <li className={cn(styles.icon, styles.icon__twitter)}>
        <Link to={link} target={LINK_BLANK} />
      </li>
    </ul>
  );
};
