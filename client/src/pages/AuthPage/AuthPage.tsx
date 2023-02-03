import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Input } from "../../components/UI";
import { Form } from "../../components";

export const AuthPage = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form title={t("authPage.title") || ""}>
      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="on"
        placeholder={t("authPage.username") || ""}
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="on"
        placeholder={t("authPage.password") || ""}
      />
      <Button btnSize="large">{t("authPage.submitBtnText")}</Button>
      <p style={{ textAlign: "center" }}>
        {t("authPage.newUserText")}
        <br />
        <Link to="register">{t("authPage.registerLink")}</Link>
        {t("authPage.registerSugguestionText")}
      </p>
    </Form>
  );
};
