import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Input, Select } from "../../UI";
import { Option } from "../../UI/Select/Select";
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

const genderOptions: Option[] = [
  { value: "male", title: "accountPage.male" },
  { value: "female", title: "accountPage.female" },
];

const educationOptions: Option[] = [
  { value: "initial", title: "accountPage.initial" },
  { value: "average", title: "accountPage.average" },
  { value: "higher", title: "accountPage.higher" },
  { value: "candidateOfSciences", title: "accountPage.candidateOfSciences" },
  { value: "doctorDegree", title: "accountPage.doctorDegree" },
];

export const CommonInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialData);
  const { t } = useTranslation();

  const educationTitle = educationOptions.find(
    (option) => option.value === formData.education
  )?.title;
  const genderTitle = genderOptions.find((option) => option.value === formData.gender)?.title;

  const editOrSaveHandler = () => {
    if (!isEdit) {
      setIsEdit((prev) => !prev);
      return;
    }
    setIsEdit((prev) => !prev);
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <h2>{t("accountPage.commonInfo")}</h2>
        <Button onClick={editOrSaveHandler} appearance="ghost">
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
            <span>{t(genderTitle || "") || t("accountPage.notIndicated")}</span>
          ) : (
            <Select
              options={genderOptions}
              placeholder={t("accountPage.notIndicated") || ""}
              value={formData.gender}
              name="gender"
              onChange={changeHandler}
            />
          )}
        </li>
        <li>
          <span>{t("accountPage.birthday")}</span>
          {!isEdit ? (
            <span>{formData.birthday || t("accountPage.notIndicated")}</span>
          ) : (
            <Input value={formData.birthday} name="birthday" type="date" onChange={changeHandler} />
          )}
        </li>
        <li>
          <span>{t("accountPage.education")}</span>
          {!isEdit ? (
            <span>{t(educationTitle || "") || t("accountPage.notIndicated")}</span>
          ) : (
            <Select
              options={educationOptions}
              placeholder={t("accountPage.notIndicated") || ""}
              value={formData.education}
              name="education"
              onChange={changeHandler}
            />
          )}
        </li>
      </ul>
    </div>
  );
};
