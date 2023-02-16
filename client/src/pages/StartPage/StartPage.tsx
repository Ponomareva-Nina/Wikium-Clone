import { useTranslation } from "react-i18next";
import cn from "classnames";
import styles from "./StartPage.module.scss";
import { Header } from "../../components";

export const StartPage = () => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.container)}>
      <h1>{t("startPage.title")}</h1>
    </div>
  );
};
