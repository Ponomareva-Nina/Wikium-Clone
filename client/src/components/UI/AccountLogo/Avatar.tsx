import cn from "classnames";
import noneAvatar from "./none_avatar.svg";
import styles from "./Avatar.module.scss";

type AvatarProps = {
  onClick: () => void;
  isOpen: boolean;
};

export const Avatar = ({ onClick, isOpen }: AvatarProps) => {
  return (
    <button
      type="button"
      className={cn(styles.account_btn, isOpen && styles.account_btn__active)}
      onClick={onClick}
    >
      <img className={cn(styles.avatar_photo)} src={noneAvatar} alt="Имя аккаунта" />
    </button>
  );
};
