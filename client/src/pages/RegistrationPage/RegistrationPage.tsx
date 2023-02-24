import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../store/redux-hooks";
import { register } from "../../store/user/user.actions";

import { Button, Input } from "../../components/UI";
import { Form } from "../../components";
import styles from "./RegistrationPage.module.scss";

interface RegistrationFormData {
  email: string;
  password: string;
  repeatPassword: string;
}

const initialFormData: RegistrationFormData = {
  email: "",
  password: "",
  repeatPassword: "",
};

export const RegistrationPage = () => {
  const [authFormData, setAuthFormData] = useState<RegistrationFormData>(initialFormData);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const formInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthFormData((prevValue) => ({ ...prevValue, [e.target.name]: e.target.value }));
  };

  const submitFormHandler = (): void => {
    if (authFormData.password !== authFormData.repeatPassword) {
      toast.error(`Duplicate password and password different`);
      return;
    }
    const data = {
      email: authFormData.email,
      password: authFormData.password,
    };
    toast.promise(dispatch(register(data)).unwrap(), {
      pending: "Registration...",
      success: {
        render() {
          navigate("/account");
          return "Registration is success";
        },
      },
      error: {
        render({ data: errData }) {
          return `${errData}`;
        },
      },
    });
  };

  return (
    <Form
      formHandler={submitFormHandler}
      title={t("registerPage.title") || ""}
      appearance="fit-width"
    >
      <Input
        name="email"
        type="email"
        value={authFormData.email}
        required
        onChange={formInputHandler}
        autoComplete="on"
        placeholder={t("registerPage.username") || ""}
      />
      <Input
        name="password"
        type="password"
        value={authFormData.password}
        required
        minLength={8}
        onChange={formInputHandler}
        autoComplete="on"
        placeholder={t("registerPage.password") || ""}
      />
      <Input
        name="repeatPassword"
        type="password"
        value={authFormData.repeatPassword}
        required
        minLength={8}
        onChange={formInputHandler}
        autoComplete="off"
        placeholder={t("registerPage.repeatPassword") || ""}
      />
      <Button btnSize="large">{t("registerPage.submitBtnText")}</Button>
      <p style={{ textAlign: "center" }}>
        {t("registerPage.haveAccount")}
        <br />
        <Link to="/auth">
          <span className={styles.link}>{t("registerPage.loginLink")}</span>
        </Link>
        {t("registerPage.loginSuggestionText")}
      </p>
    </Form>
  );
};
