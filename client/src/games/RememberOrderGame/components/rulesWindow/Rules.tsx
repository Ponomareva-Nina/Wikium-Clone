import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/UI";
import styles from "./Rules.module.scss";

export const RememberOrderRules = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className={styles.text}>{t("rememberOrder.rules")}</p>
      <Button>{t("gamesData.startGame")}</Button>
    </>
  );
};
