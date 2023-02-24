import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../../../components/UI";
import styles from "./Placeholder.module.scss";

export const Placeholder: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <p className={styles.text}>{t("StatisticsPage.noInfo")}</p>
      <Link to="/games">
        <Button appearance="initial" btnSize="large">
          {t("StatisticsPage.startBtn")}
        </Button>
      </Link>
    </div>
  );
};
