import cn from "classnames";
import { useTranslation } from "react-i18next";
import styles from "./Team.module.scss";
import { MemberCard } from "./components/MemberCard/MemberCard";
import { MEMBERS } from "./components/MemberCard/dataMembers";

export const Team = () => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles.team_container)}>
      <div className={cn(styles.line_container)}>
        <div className={cn(styles.line)} />
      </div>
      <div className={cn(styles.wrapper, styles.team_wrapper)}>
        <p className={cn(styles.title)}>{t("team.title")}</p>
        <p className={cn(styles.descriprion)}>{t("team.description")}</p>
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
