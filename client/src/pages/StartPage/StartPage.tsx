import { useTranslation } from "react-i18next";
import { UserMenu } from "../../components";

export const StartPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("startPage.title")}</h1>
      <UserMenu />
    </>
  );
};
