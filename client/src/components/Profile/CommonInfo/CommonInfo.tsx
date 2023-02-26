import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { User } from "../../../interfaces/User";
import { useAppDispatch } from "../../../store/redux-hooks";
import { updateUserInformation } from "../../../store/user/user.actions";
import { getLocaleDateFromString } from "../../../utils/date.util";
import { Button, Input, Select } from "../../UI";
import { Option } from "../../UI/Select/Select";
import styles from "./CommonInfo.module.scss";

interface FormData {
  name: string;
  surname: string;
  gender: string;
  birthDay: string;
  education: string;
}

const initialData: FormData = {
  name: "",
  surname: "",
  gender: "",
  birthDay: "",
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

interface CommonInfoProps {
  user: User;
}

export const CommonInfo: FC<CommonInfoProps> = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialData);

  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language === "en" ? "en-EN" : "ru-RU";

  const educationTitle = educationOptions.find(
    (option) => option.value === formData.education
  )?.title;

  const genderTitle = genderOptions.find((option) => option.value === formData.gender)?.title;

  const cancelHandler = () => {
    setIsEdit(false);
  };

  const editOrSaveHandler = () => {
    if (!isEdit) {
      setIsEdit((prev) => !prev);
      return;
    }
    const newUserData = { _id: user._id, ...formData };
    toast.promise(
      dispatch(updateUserInformation(newUserData))
        .unwrap()
        .finally(() => setIsEdit((prev) => !prev)),
      {
        pending: "Update information...",
        success: "Update information is success",
        error: {
          render({ data }) {
            return `${data}`;
          },
        },
      }
    );
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    setFormData({
      name: user.name,
      surname: user.surname,
      gender: user.gender,
      education: user.education,
      birthDay: user.birthDay,
    });
  }, [isEdit, user]);

  return (
    <form onSubmit={submitHandler} className={styles.wrapper}>
      <div className={styles.head}>
        <h2 className={styles.head_title}>{t("accountPage.commonInfo")}</h2>
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
            <span>
              {getLocaleDateFromString(formData.birthDay, currentLocale) ||
                t("accountPage.notIndicated")}
            </span>
          ) : (
            <Input
              value={formData.birthDay}
              name="birthDay"
              max="2019-01-01"
              type="date"
              onChange={changeHandler}
            />
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
    </form>
  );
};
