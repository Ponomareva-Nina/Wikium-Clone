import { ChangeEvent, useMemo } from "react";
import { LevelInfo } from "./LevelInfo/LevelInfo";
import NoneAvatar from "../../assets/images/Avatar/none_avatar.svg";
import styles from "./Profile.module.scss";
import { CommonInfo } from "./CommonInfo/CommonInfo";
import { InputFile } from "../UI/InputFile/InputFile";
import { PasswordInfo } from "./PasswordInfo/PasswordInfo";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import { NEURONS_ON_LEVEL } from "../../constants/constants";
import { User } from "../../interfaces/User";
import { updateUserAvatar } from "../../store/user/user.actions";

export const Profile = () => {
  const user = useAppSelector((state) => state.user.entity) as User;
  const dispatch = useAppDispatch();
  const uploadFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateUserAvatar({ files: e.target.files as FileList, _id: user._id }));
  };

  const neurons = useMemo(() => {
    return user!.statistics.reduce((acc, stat) => acc + stat.neurons, 0);
  }, [user]);

  const currentLevel = Math.floor(neurons / NEURONS_ON_LEVEL);
  const needNeurons = NEURONS_ON_LEVEL - (neurons % NEURONS_ON_LEVEL);
  const progressPercent = (neurons * 100) / NEURONS_ON_LEVEL;

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img className={styles.img} src={user?.avatar || NoneAvatar} alt="user-avatar" />
          <InputFile onChange={uploadFileHandler} />
        </div>
        <div className={styles.name}>{user?.name || user?.email}</div>
      </div>
      <LevelInfo
        needNeurons={needNeurons}
        neurons={neurons}
        progressPercent={progressPercent}
        currentLevel={currentLevel}
      />
      <CommonInfo user={user} />
      <PasswordInfo user={user} />
    </div>
  );
};
