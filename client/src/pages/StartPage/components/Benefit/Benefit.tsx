import { useTranslation } from "react-i18next";
import cn from "classnames";
import styles from "./Benefit.module.scss";

export const Benefit = () => {
  const { t } = useTranslation();

  return (
    <section className={cn(styles.section, styles.benefit)}>
      <div className={cn(styles.wrapper, styles.section_container, styles.benefit_container)}>
        <h2 className={cn(styles.start_title)}>{t("startPage.benefit")}</h2>
        <div className={cn(styles.benefits_list)} />
      </div>
    </section>
  );
};
