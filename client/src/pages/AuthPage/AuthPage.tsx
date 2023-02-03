import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "../../components/UI";
import { Form } from "../../components";

export const AuthPage = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form title={t("authPage.title") || ""}>
      <div className="form-container">
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
      </div>
    </Form>
  );
};
