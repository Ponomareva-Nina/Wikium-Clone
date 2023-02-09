import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/UI";
import styles from "./Rules.module.scss";

interface RulesProps {
  startGameHandler: () => void;
}

export const RememberOrderRules: FC<PropsWithChildren<RulesProps>> = ({ startGameHandler }) => {
  const { t } = useTranslation();
  return (
    <>
      <p className={styles.text}>{t("rememberOrder.rules")}</p>
      <Button type="button" onClick={startGameHandler}>
        {t("gamesData.startGame")}
      </Button>
    </>
  );
};
