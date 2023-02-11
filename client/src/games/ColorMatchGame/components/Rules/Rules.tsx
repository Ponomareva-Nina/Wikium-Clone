import { useTranslation } from "react-i18next";
import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { Button } from "../../../../components/UI";
import styles from "./Rules.module.scss";

interface RulesProps {
  isGameStarted: boolean;
  onClick: () => void;
}

export const Rules: FC<PropsWithChildren<RulesProps>> = ({ isGameStarted, onClick }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.container)}>
      <p className={cn(styles.description)}>{t("colorMatch.rules")}</p>
      {!isGameStarted && <Button onClick={onClick}>{t("gamesData.startGame")}</Button>}
    </div>
  );
};
