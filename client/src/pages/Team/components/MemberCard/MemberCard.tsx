import cn from "classnames";
import { useTranslation } from "react-i18next";
import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactSVG } from "react-svg";
import styles from "./MemberCard.module.scss";
import { MembersInterface } from "./dataMembers";
import github from "../../../../assets/images/Team/github.svg";
import { LINK_BLANK } from "../../../../constants/constants";

interface MemberCardsProps {
  member: MembersInterface;
}

export const MemberCard: FC<PropsWithChildren<MemberCardsProps>> = ({ member }) => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles.member)}>
      <img src={member.photo} alt={`${t("team.photo")}`} className={cn(styles.photo)} />
      <p className={cn(styles.name)}>{t(member.name)}</p>
      <div className={cn(styles.role_container)}>
        <p className={cn(styles.role)}>{t(member.role)}</p>
        <div className={cn(styles.role_content)}>
          <span className={cn(styles.icon)}>
            <ReactSVG src={member.roleIcon} />
          </span>
          <span className={cn(styles.role_description)}>{t(member.roleDescription)}</span>
        </div>
      </div>
      <p className={cn(styles.descriprion)}>{t(member.description)}</p>
      <div>
        <Link to={member.githubLink} target={LINK_BLANK} className={cn(styles.socials_container)}>
          <span className={cn(styles.icon)}>
            <ReactSVG src={github} />
          </span>
          <span className={cn(styles.nickname)}>{member.githubName}</span>
        </Link>
      </div>
    </div>
  );
};
