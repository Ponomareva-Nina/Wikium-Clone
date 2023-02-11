import { FC } from "react";
import { Skill } from "../../../../../interfaces/GameInterface";
import styles from "./SkillItem.module.scss";

interface SkillItemProps {
  skill: Skill;
}

export const SkillItem: FC<SkillItemProps> = ({ skill }) => {
  return (
    <li className={styles.wrapper}>
      <img className={styles.icon} src={skill.icon} alt={skill.title} />
      <div className={styles.content}>
        <div className={styles.title}>{skill.title}</div>
        <div className={styles.description}>{skill.description}</div>
      </div>
    </li>
  );
};
