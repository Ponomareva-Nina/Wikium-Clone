import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Skill } from "../../../../interfaces/GameInterface";
import { SkillItem } from "./SkillItem/SkillItem";
import styles from "./SkillList.module.scss";

interface SkillListProps {
  skills: Skill[];
}

export const SkillList: FC<SkillListProps> = ({ skills }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{t(`gamesData.skillsTitle`)}</h3>
      <ul className={styles.list}>
        {skills.map((skill) => (
          <SkillItem skill={skill} key={skill.title} />
        ))}
      </ul>
    </div>
  );
};
