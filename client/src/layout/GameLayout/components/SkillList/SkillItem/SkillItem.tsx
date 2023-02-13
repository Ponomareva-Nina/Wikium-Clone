import { useTranslation } from "react-i18next";
import { FC } from "react";
import { Skill } from "../../../../../interfaces/GameInterface";
import styles from "./SkillItem.module.scss";

interface SkillItemProps {
  skill: Skill;
}

export const SkillItem: FC<SkillItemProps> = ({ skill }) => {
  const { t } = useTranslation();
  return (
    <li className={styles.wrapper}>
      <img className={styles.icon} src={skill.icon} alt={skill.title} />
      <div className={styles.content}>
        <div className={styles.title}>{t(skill.title)}</div>
        <div className={styles.description}>{t(skill.description)}</div>
      </div>
    </li>
  );
};
