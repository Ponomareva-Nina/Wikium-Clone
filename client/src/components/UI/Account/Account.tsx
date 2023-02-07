import cn from "classnames";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
  useState,
  useEffect,
  useRef,
} from "react";
import { useTranslation } from "react-i18next";
import noneAvatar from "../../../assets/images/Avatar/none_avatar.svg";
import { UserMenu } from "../../UserMenu/UserMenu";
import styles from "./Account.module.scss";

interface AccountProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isOpenMenu?: boolean;
}

export const Account: FC<PropsWithChildren<AccountProps>> = ({
  children,
  ...rest
}: AccountProps) => {
  const [isOpenAccPopup, setIsOpenAccPopup] = useState(false);
  const { t } = useTranslation();

  const handleAccountClick = (): void => {
    setIsOpenAccPopup((prev) => !prev);
  };

  const logoRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement;
      if (menuRef.current && logoRef.current) {
        if (!menuRef.current.contains(target) && !logoRef.current.contains(target))
          setIsOpenAccPopup(false);
      }
    };

    document.body.addEventListener("mousedown", handler);
    return () => document.body.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={logoRef} className={cn(styles.account_container)}>
      <div>
        <p className={cn(styles.account_descr)}>Name</p>
        <p className={cn(styles.account_descr)}>Neurons</p>
      </div>
      <button
        type="button"
        className={cn(styles.account_btn, isOpenAccPopup && styles.account_btn__active)}
        onClick={handleAccountClick}
        {...rest}
      >
        <img className={cn(styles.avatar_photo)} src={noneAvatar} alt={`${t("user.avatar")}`} />
      </button>
      <div ref={menuRef}>
        <UserMenu isOpenAccPopup={isOpenAccPopup} onClick={handleAccountClick} />
      </div>
    </div>
  );
};
