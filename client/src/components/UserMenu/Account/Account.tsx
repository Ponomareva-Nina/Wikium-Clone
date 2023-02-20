import cn from "classnames";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
  useState,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { useTranslation } from "react-i18next";
import noneAvatar from "../../../assets/images/Avatar/none_avatar.svg";
import { User } from "../../../interfaces/User";
import { useAppDispatch } from "../../../store/redux-hooks";
import { logout } from "../../../store/user/user.actions";
import { UserMenu } from "../UserMenu";
import styles from "./Account.module.scss";

interface AccountProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isOpenMenu?: boolean;
  user: User;
}

export const Account: FC<PropsWithChildren<AccountProps>> = ({
  children,
  user,
  ...rest
}: AccountProps) => {
  const [isOpenAccPopup, setIsOpenAccPopup] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const neurons = useMemo(() => {
    return user.statistics.reduce((acc, stat) => acc + stat.neurons, 0);
  }, [user]);
  const handleAccountClick = (): void => {
    setIsOpenAccPopup((prev) => !prev);
  };

  const logoutHandler = (): void => {
    dispatch(logout());
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
        <p className={cn(styles.account_descr)}>{user?.name || user?.email}</p>
        <p className={cn(styles.account_descr)}>{neurons}</p>
      </div>
      <button
        type="button"
        className={cn(styles.account_btn, isOpenAccPopup && styles.account_btn__active)}
        onClick={handleAccountClick}
        {...rest}
      >
        <img
          className={cn(styles.avatar_photo)}
          src={user.avatar || noneAvatar}
          alt={`${t("user.avatar")}`}
        />
      </button>
      <div ref={menuRef}>
        <UserMenu
          logoutHandler={logoutHandler}
          isOpenAccPopup={isOpenAccPopup}
          onClick={handleAccountClick}
        />
      </div>
    </div>
  );
};
