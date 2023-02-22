import { Link } from "react-router-dom";
import cn from "classnames";
import { FC, PropsWithChildren } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactSVG } from "react-svg";
import styles from "./Socials.module.scss";
import { LINK_BLANK } from "../../../../constants/constants";
import { SOCIALS } from "./dataSocial";

interface SocialsProps {
  link: string;
}

export const Socials: FC<PropsWithChildren<SocialsProps>> = ({ link }) => {
  return (
    <ul className={cn(styles.socials_container)}>
      {SOCIALS.map((social) => (
        <li>
          <Link to={link} target={LINK_BLANK}>
            <span className={cn(styles.icon)}>
              <ReactSVG src={social} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
