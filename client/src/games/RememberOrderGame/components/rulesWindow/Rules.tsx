import { useTranslation } from "react-i18next";
import styles from "./Rules.module.scss";

export const RememberOrderRules = () => {
  const { t } = useTranslation();
  return <p className={styles.text}>{t("rememberOrder.rules")}</p>;
};
