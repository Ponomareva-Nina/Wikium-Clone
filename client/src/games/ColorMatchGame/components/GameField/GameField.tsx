import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Field } from "./Field/Field";
import styles from "./GameFiels.module.scss";

export const GameField: FC<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles.container)}>
      <Field description={t("colorMatchData.value")}>{children}</Field>
      <Field description={t("colorMatchData.color")}>{children}</Field>
    </div>
  );
};
