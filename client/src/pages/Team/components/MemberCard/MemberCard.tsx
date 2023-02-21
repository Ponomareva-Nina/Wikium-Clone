import cn from "classnames";
import { useTranslation } from "react-i18next";
import { FC, PropsWithChildren } from "react";
import styles from "./MemberCard.module.scss";
import { MembersInterface } from "./dataMembers";
import { Socials } from "../Socials/Socials";

interface MemberCardsProps {
  member: MembersInterface;
}

export const MemberCard: FC<PropsWithChildren<MemberCardsProps>> = ({ member }) => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles.member)}>
      <img src={member.photo} alt={`${t("team.photo")}`} className={cn(styles.photo)} />
      <p className={cn(styles.name)}>{t(member.name)}</p>
      <p className={cn(styles.role)}>{t(member.role)}</p>
      <p className={cn(styles.descriprion)}>{t(member.description)}</p>
      <Socials link={member.github} />
    </div>
  );
};
