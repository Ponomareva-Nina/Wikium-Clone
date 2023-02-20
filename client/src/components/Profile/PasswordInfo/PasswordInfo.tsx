import { useState, ChangeEvent, FormEvent, FC } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { User } from "../../../interfaces/User";
import { useAppDispatch } from "../../../store/redux-hooks";
import { changeUserPassword } from "../../../store/user/user.actions";
import { Button, Input } from "../../UI";
import styles from "./PasswordInfo.module.scss";

interface FormData {
  password: string;
  newPasswords: string;
  newPasswordsRepeat: string;
}

const initialData: FormData = {
  password: "",
  newPasswords: "",
  newPasswordsRepeat: "",
};
interface PasswordInfoProps {
  user: User;
}

export const PasswordInfo: FC<PasswordInfoProps> = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialData);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const cancelHandler = () => {
    setIsEdit(false);
    setFormData(initialData);
  };

  const editOrSaveHandler = () => {
    if (!isEdit) {
      setIsEdit((prev) => !prev);
      return;
    }
    if (formData.newPasswords === formData.newPasswordsRepeat) {
      const passwordData = {
        _id: user._id,
        oldPassword: formData.password,
        newPassword: formData.newPasswords,
      };

      toast.promise(dispatch(changeUserPassword(passwordData)).unwrap(), {
        pending: "Update password...",
        success: "Update password is success",
        error: {
          render({ data }) {
            return `${data}`;
          },
        },
      });
      setIsEdit((prev) => !prev);
      setFormData(initialData);
    } else {
      toast.error("New password and repeat new password  are different");
    }
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className={styles.wrapper}>
      <div className={styles.head}>
        <h2>{t("accountPage.password")}</h2>
        <div className={styles["btn-group"]}>
          {isEdit && (
            <Button onClick={cancelHandler} appearance="ghost">
              {t("accountPage.cancel")}
            </Button>
          )}
          <Button onClick={editOrSaveHandler} appearance="ghost">
            {!isEdit ? t("accountPage.edit") : t("accountPage.save")}
          </Button>
        </div>
      </div>
      <ul className={styles.list}>
        <li>
          <span>{t("accountPage.password")}</span>
          {!isEdit ? (
            <span>********</span>
          ) : (
            <Input
              type="password"
              value={formData.password}
              name="password"
              onChange={changeHandler}
            />
          )}
        </li>
        {isEdit && (
          <>
            <li>
              <span>{t("accountPage.newPassword")}</span>
              <Input
                type="password"
                value={formData.newPasswords}
                name="newPasswords"
                onChange={changeHandler}
              />
            </li>
            <li>
              <span>{t("accountPage.newPasswordRepeat")}</span>
              <Input
                type="password"
                value={formData.newPasswordsRepeat}
                name="newPasswordsRepeat"
                onChange={changeHandler}
              />
            </li>
          </>
        )}
      </ul>
    </form>
  );
};
