import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Input } from "../../UI";
import styles from "./CommonInfo.module.scss";

interface FormData {
  name: string;
  surname: string;
  gender: string;
  birthday: string;
  education: string;
}

const initialData: FormData = {
  name: "",
  surname: "",
  gender: "",
  birthday: "",
  education: "",
};

export const CommonInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialData);
  const { t } = useTranslation();

  const editOrSaveHandler = () => {
    setIsEdit((prev) => !prev);
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <h2>{t("accountPage.commonInfo")}</h2>
        <Button onClick={editOrSaveHandler}>
          {!isEdit ? t("accountPage.edit") : t("accountPage.save")}
        </Button>
      </div>
      <ul className={styles.list}>
        <li>
          <span>{t("accountPage.name")}</span>
          {!isEdit ? (
            <span>{formData.name || t("accountPage.notIndicated")} </span>
          ) : (
            <Input value={formData.name} name="name" onChange={changeHandler} />
          )}
        </li>
        <li>
          <span>{t("accountPage.surname")}</span>
          {!isEdit ? (
            <span>{formData.surname || t("accountPage.notIndicated")}</span>
          ) : (
            <Input value={formData.surname} name="surname" onChange={changeHandler} />
          )}
        </li>
        <li>
          <span>{t("accountPage.gender")}</span>
          {!isEdit ? (
            <span>{formData.gender || t("accountPage.notIndicated")}</span>
          ) : (
            <Input value={formData.gender} name="gender" onChange={changeHandler} />
          )}
        </li>
        <li>
          <span>{t("accountPage.birthday")}</span>
          {!isEdit ? (
            <span>{formData.birthday || t("accountPage.notIndicated")}</span>
          ) : (
            <Input value={formData.birthday} name="birthday" onChange={changeHandler} />
          )}
        </li>
        <li>
          <span>{t("accountPage.education")}</span>
          {!isEdit ? (
            <span>{formData.education || t("accountPage.notIndicated")}</span>
          ) : (
            <Input value={formData.education} name="education" onChange={changeHandler} />
          )}
        </li>
      </ul>
    </div>
  );
};
