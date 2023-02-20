import { ChangeEvent, useState } from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../store/redux-hooks";
import { login } from "../../store/user/user.actions";

import { Button, Input } from "../../components/UI";
import { Form } from "../../components";

interface AuthFormData {
  email: string;
  password: string;
}

const initialFormData: AuthFormData = {
  email: "",
  password: "",
};

export const AuthPage = () => {
  const [authFormData, setAuthFormData] = useState<AuthFormData>(initialFormData);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const formInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthFormData((prevValue) => ({ ...prevValue, [e.target.name]: e.target.value }));
  };

  const submitFormHandler = (): void => {
    toast.promise(dispatch(login(authFormData)).unwrap(), {
      pending: "Authentication...",
      success: "Authentication is success",
      error: {
        render({ data }) {
          return `${data}`;
        },
      },
    });
  };

  return (
    <Form formHandler={submitFormHandler} title={t("authPage.title") || ""} appearance="fit-width">
      <Input
        name="email"
        type="email"
        value={authFormData.email}
        required
        onChange={formInputHandler}
        autoComplete="on"
        placeholder={t("authPage.username") || ""}
      />
      <Input
        name="password"
        type="password"
        value={authFormData.password}
        required
        onChange={formInputHandler}
        autoComplete="on"
        placeholder={t("authPage.password") || ""}
      />
      <Button btnSize="large">{t("authPage.submitBtnText")}</Button>
      <p style={{ textAlign: "center" }}>
        {t("authPage.newUserText")}
        <br />
        <Link to="/register">{t("authPage.registerLink")}</Link>
        {t("authPage.registerSuggestionText")}
      </p>
    </Form>
  );
};
