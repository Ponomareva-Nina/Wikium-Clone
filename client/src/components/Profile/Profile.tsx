import { ChangeEvent } from "react";
import { LevelInfo } from "./LevelInfo/LevelInfo";
import Avatar from "../../assets/images/Avatar/none_avatar.svg";
import styles from "./Profile.module.scss";
import { CommonInfo } from "./CommonInfo/CommonInfo";
import { InputFile } from "../UI/InputFile/InputFile";
import { PasswordInfo } from "./PasswordInfo/PasswordInfo";

export const Profile = () => {
  const uploadFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img className={styles.img} src={Avatar} alt="Avatar" />
          <InputFile onChange={uploadFileHandler} />
        </div>
        <div className={styles.name}>User name</div>
      </div>
      <LevelInfo needNeurons={700} neurons={1300} progressPercent={70} currentLevel={3} />
      <CommonInfo />
      <PasswordInfo />
    </div>
  );
};
