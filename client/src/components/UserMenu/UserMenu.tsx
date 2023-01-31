import { useTranslation } from "react-i18next";
import { ClassNames } from "../../constants/classNames";
import { Button } from "../UI";
import { LANGUAGES } from "./types";

export const UserMenu = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <p>{t("menu.language")}:</p>
      <Button btnSize={ClassNames.BTN_SMALL} onClick={() => i18n.changeLanguage(LANGUAGES.EN)}>
        {LANGUAGES.EN}
      </Button>
      <Button btnSize={ClassNames.BTN_SMALL} onClick={() => i18n.changeLanguage(LANGUAGES.RU)}>
        {LANGUAGES.RU}
      </Button>
    </>
  );
};
