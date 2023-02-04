import cn from "classnames";
import noneAvatar from "../../../assets/images/Avatar/none_avatar.svg";
import styles from "./AccountLogo.module.scss";

type AccountLogoProps = {
  onClick: () => void;
  isOpen: boolean;
  isOpenMenu?: boolean;
};

export const AccountLogo = ({ onClick, isOpen, isOpenMenu }: AccountLogoProps) => {
  return (
    <div className={cn(!isOpenMenu ? styles.account_container : styles.menu_acc)}>
      <div>
        <p className={cn(styles.account_descr)}>Имя</p>
        <p className={cn(styles.account_descr)}>Баллы</p>
      </div>
      <button
        type="button"
        className={cn(
          !isOpenMenu ? styles.account_btn : styles.account_btn_menu,
          isOpen && styles.account_btn__active
        )}
        onClick={onClick}
      >
        <img className={cn(styles.avatar_photo)} src={noneAvatar} alt="Имя аккаунта" />
      </button>
    </div>
  );
};
