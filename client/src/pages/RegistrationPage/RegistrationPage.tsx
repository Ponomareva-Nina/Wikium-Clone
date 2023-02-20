import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Input } from "../../components/UI";
import { Form } from "../../components";
import { inputHandler } from "../../utils/inputHandler";
import { useAppDispatch } from "../../store/redux-hooks";
import { register } from "../../store/user/user.actions";

export const RegistrationPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const submitFormHandler = (): void => {
    const data = {
      email,
      password,
    };
    dispatch(register(data));
  };

  return (
    <Form
      formHandler={submitFormHandler}
      title={t("registerPage.title") || ""}
      appearance="fit-width"
    >
      <Input
        type="email"
        value={email}
        required
        onChange={(e) => inputHandler(e, setEmail)}
        autoComplete="on"
        placeholder={t("registerPage.username") || ""}
      />
      <Input
        type="password"
        value={password}
        required
        minLength={6}
        onChange={(e) => inputHandler(e, setPassword)}
        autoComplete="on"
        placeholder={t("registerPage.password") || ""}
      />
      <Button btnSize="large">{t("registerPage.submitBtnText")}</Button>
      <p style={{ textAlign: "center" }}>
        {t("registerPage.haveAccount")}
        <br />
        <Link to="/auth">{t("registerPage.loginLink")}</Link>
        {t("registerPage.loginSugguestionText")}
      </p>
    </Form>
  );
};
