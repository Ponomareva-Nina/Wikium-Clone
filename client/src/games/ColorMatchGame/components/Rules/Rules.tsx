import { useTranslation } from "react-i18next";
import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { Button } from "../../../../components/UI";
import styles from "./Rules.module.scss";
import { useViewport } from "../../../../hooks/useViewport";
import { BREAKPOINT_COLORMATCH_GAME } from "../../../../constants/constants";

interface RulesProps {
  isGameInit: boolean;
  onClick: () => void;
}

export const Rules: FC<PropsWithChildren<RulesProps>> = ({ isGameInit, onClick }) => {
  const { t } = useTranslation();
  const { width } = useViewport();

  return (
    <div className={cn(styles.container)}>
      <p className={cn(styles.description)}>
        {width >= BREAKPOINT_COLORMATCH_GAME
          ? t("ColorMatchGame.rulesLeft")
          : t("ColorMatchGame.rulesTop")}
      </p>
      {isGameInit && <Button onClick={onClick}>{t("gamesData.startGame")}</Button>}
    </div>
  );
};
