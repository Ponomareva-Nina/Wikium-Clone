import cn from "classnames";
import noneAvatar from "../../../assets/images/Avatar/none_avatar.svg";
import styles from "./AccountLogo.module.scss";

type AccountLogoProps = {
  onClick: () => void;
  isOpen: boolean;
};

export const AccountLogo = ({ onClick, isOpen }: AccountLogoProps) => {
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
