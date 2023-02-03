import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Input } from "../../components/UI";
import { Form } from "../../components";

export const RegistrationPage = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form title={t("registerPage.title") || ""}>
      <Input
        type="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="on"
        placeholder={t("registerPage.username") || ""}
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
