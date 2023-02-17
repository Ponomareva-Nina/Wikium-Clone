import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Input } from "../../components/UI";
import { Form } from "../../components";
import { inputHandler } from "../../utils/inputHandler";
import { useActions } from "../../store/redux-hooks";

export const AuthPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useActions();

  const submitFormHandler = (): void => {
    const data = {
      email,
      password,
    };
    login(data);
  };

  return (
    <Form formHandler={submitFormHandler} title={t("authPage.title") || ""} appearance="fit-width">
      <Input
        type="email"
        value={email}
        required
        onChange={(e) => inputHandler(e, setEmail)}
        autoComplete="on"
        placeholder={t("authPage.username") || ""}
      />
      <Input
        type="password"
        value={password}
        required
        onChange={(e) => inputHandler(e, setPassword)}
        autoComplete="on"
        placeholder={t("authPage.password") || ""}
      />
      <Button btnSize="large">{t("authPage.submitBtnText")}</Button>
      <p style={{ textAlign: "center" }}>
        {t("authPage.newUserText")}
        <br />
        <Link to="/register">{t("authPage.registerLink")}</Link>
        {t("authPage.registerSugguestionText")}
      </p>
    </Form>
  );
};
