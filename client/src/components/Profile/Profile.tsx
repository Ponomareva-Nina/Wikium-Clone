import { ChangeEvent, useMemo } from "react";
import { toast } from "react-toastify";
import { LevelInfo } from "./LevelInfo/LevelInfo";
import NoneAvatar from "../../assets/images/Avatar/none_avatar.svg";
import styles from "./Profile.module.scss";
import { CommonInfo } from "./CommonInfo/CommonInfo";
import { InputFile } from "../UI/InputFile/InputFile";
import { PasswordInfo } from "./PasswordInfo/PasswordInfo";
import { NEURONS_ON_LEVEL } from "../../constants/constants";
import { updateUserAvatar } from "../../store/user/user.actions";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";

export const Profile = () => {
  const user = useAppSelector((state) => state.user.entity!);
  const dispatch = useAppDispatch();

  const uploadFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newAvatarData = { files: e.target.files as FileList, _id: user._id };

    toast.promise(dispatch(updateUserAvatar(newAvatarData)).unwrap(), {
      pending: "Update image...",
      success: "Update is success",
      error: {
        render({ data }) {
          return `${data}`;
        },
      },
    });
  };

  const neurons = useMemo(() => {
    return user!.statistics.reduce((acc, stat) => acc + stat.neurons, 0);
  }, [user]);

  const currentLevel = Math.floor(neurons / NEURONS_ON_LEVEL);
  const needNeurons = NEURONS_ON_LEVEL - (neurons % NEURONS_ON_LEVEL);
  const progressPercent = ((neurons % NEURONS_ON_LEVEL) * 100) / NEURONS_ON_LEVEL;

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
