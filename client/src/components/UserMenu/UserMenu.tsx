import { useTranslation } from "react-i18next";
import { Button } from "../UI";
import { LANGUAGES } from "./types";

export const UserMenu = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <p>{t("menu.language")}:</p>
      <Button btnSize="small" onClick={() => i18n.changeLanguage(LANGUAGES.EN)}>
        {LANGUAGES.EN}
      </Button>
      <Button btnSize="small" onClick={() => i18n.changeLanguage(LANGUAGES.RU)}>
        {LANGUAGES.RU}
      </Button>
    </>
  );
};
