import { LevelInfo } from "./LevelInfo/LevelInfo";
import Avatar from "../../assets/images/Avatar/none_avatar.svg";
import styles from "./Profile.module.scss";
import { CommonInfo } from "./CommonInfo/CommonInfo";

export const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <img className={styles.avatar} src={Avatar} alt="Avatar" />
        <div className={styles.name}>user name</div>
      </div>
      <LevelInfo needNeurons={700} neurons={1300} progressPercent={70} currentLevel={3} />
      <CommonInfo />
    </div>
  );
};
