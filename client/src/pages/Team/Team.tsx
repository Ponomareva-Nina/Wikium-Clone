import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Team.module.scss";
import { MemberCard } from "./components/MemberCard/MemberCard";
import { MEMBERS } from "./components/MemberCard/dataMembers";
import { LINK_BLANK, LINK_ORIGINAL, LINK_TASK } from "../../constants/constants";

export const Team = () => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles.team_container)}>
      <div className={cn(styles.line_container)}>
        <div className={cn(styles.line)} />
      </div>
      <div className={cn(styles.wrapper, styles.team_wrapper)}>
        <p className={cn(styles.title)}>{t("team.title")}</p>
        <p className={cn(styles.descriprion)}>
          <span>{t("team.descriptionPartOne")}</span>
          <Link to={LINK_TASK} target={LINK_BLANK}>
            <b>{t("team.linkToTask")}</b>
          </Link>
          <span />
          <span>{t("team.descriptionPartTwo")}</span>
          <Link to={LINK_ORIGINAL} target={LINK_BLANK}>
            <b>{t("team.linkToOriginal")}</b>
          </Link>
          <span>{t("team.descriptionPartThree")}</span>
          <span />
        </p>
        <div className={cn(styles.members_container)}>
          {MEMBERS.map((member) => (
            <MemberCard member={member} key={member.id} />
          ))}
        </div>
        <div className={cn(styles.quote_container)}>
          <p className={cn(styles.quote)}>{t("team.quote")}</p>
          <p className={cn(styles.quote_author)}>{t("team.quoteAuthor")}</p>
        </div>
      </div>
    </div>
  );
};
