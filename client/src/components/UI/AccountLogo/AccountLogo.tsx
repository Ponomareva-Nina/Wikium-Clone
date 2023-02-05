import cn from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren, useState } from "react";
import noneAvatar from "../../../assets/images/Avatar/none_avatar.svg";
import styles from "./AccountLogo.module.scss";

interface AccountLogoProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isOpenMenu?: boolean;
}

export const AccountLogo: FC<PropsWithChildren<AccountLogoProps>> = ({
  isOpenMenu,
  children,
  ...rest
}: AccountLogoProps) => {
  const [isOpenAccPopup, setIsOpenAccPopup] = useState(false);

  const hadleAccountClick = (): void => {
    setIsOpenAccPopup((prev) => !prev);
  };
  return (
    <div className={cn(!isOpenMenu ? styles.account_container : styles.menu_acc)}>
      <div>
        <p className={cn(styles.account_descr)}>{children}</p>
        <p className={cn(styles.account_descr)}>{children}</p>
      </div>
      <button
        type="button"
        className={cn(
          !isOpenMenu ? styles.account_btn : styles.account_btn_menu,
          isOpenAccPopup && styles.account_btn__active
        )}
        onClick={hadleAccountClick}
        {...rest}
      >
        <img className={cn(styles.avatar_photo)} src={noneAvatar} alt="Имя аккаунта" />
      </button>
    </div>
  );
};
