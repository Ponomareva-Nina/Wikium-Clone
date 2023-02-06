import { useTranslation } from "react-i18next";

export const StartPage = () => {
  const { t } = useTranslation();

  return <h1>{t("startPage.title")}</h1>;
};
