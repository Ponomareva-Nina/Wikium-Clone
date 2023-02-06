/* eslint-disable import/no-cycle */
import cn from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren, useState } from "react";
import { useTranslation } from "react-i18next";
import noneAvatar from "../../../assets/images/Avatar/none_avatar.svg";
import { UserMenu } from "../../UserMenu/UserMenu";
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
  const { t } = useTranslation();

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
        onClick={isOpenMenu ? () => {} : hadleAccountClick}
        {...rest}
      >
        <img className={cn(styles.avatar_photo)} src={noneAvatar} alt={`${t("user.avatar")}`} />
      </button>
      <UserMenu isOpenAccPopup={isOpenAccPopup} />
    </div>
  );
};
