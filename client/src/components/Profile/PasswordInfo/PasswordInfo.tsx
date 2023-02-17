import { useState, ChangeEvent, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Button, Input } from "../../UI";
import styles from "./PasswordInfo.module.scss";

interface FormData {
  password: string;
  newPasswords: string;
}

const initialData: FormData = {
  password: "",
  newPasswords: "",
};

export const PasswordInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialData);
  const { t } = useTranslation();

  const editOrSaveHandler = () => {
    if (!isEdit) {
      setIsEdit((prev) => !prev);
      return;
    }
    // TODO save information logic
    setIsEdit((prev) => !prev);
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
        <Button onClick={editOrSaveHandler} appearance="ghost">
          {!isEdit ? t("accountPage.edit") : t("accountPage.save")}
        </Button>
      </div>
      <ul className={styles.list}>
        <li>
          <span>{t("accountPage.password")}</span>
          {!isEdit ? (
            <span>{formData.password || "********"} </span>
          ) : (
            <Input value={formData.password} name="name" onChange={changeHandler} />
          )}
        </li>
        {isEdit && (
          <>
            <li>
              <span>{t("accountPage.newPassword")}</span>
              <Input value={formData.password} name="name" onChange={changeHandler} />
            </li>
            <li>
              <span>{t("accountPage.newPasswordRepeat")}</span>
              <Input value={formData.password} name="name" onChange={changeHandler} />
            </li>
          </>
        )}
      </ul>
    </form>
  );
};
