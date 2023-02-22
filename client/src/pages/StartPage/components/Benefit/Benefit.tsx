import { useTranslation } from "react-i18next";
import cn from "classnames";
import styles from "./Benefit.module.scss";
import { BENEFITS } from "./dataBenefit";
import { BenefitsList } from "./components/BenefitsList";

export const Benefit = () => {
  const { t } = useTranslation();

  return (
    <section className={cn(styles.section, styles.benefit)}>
      <div className={cn(styles.wrapper, styles.section_container, styles.benefit_container)}>
        <h2 className={cn(styles.start_title)}>{t("startPage.benefit")}</h2>
        <div className={cn(styles.benefits_list)}>
          {BENEFITS.map((benefit) => (
            <div className={cn(styles.benefit_item)} key={benefit.id}>
              <img src={benefit.img} alt={benefit.age} />
              <h3 className={cn(styles.age_title)}>{t(benefit.age)}</h3>
              <BenefitsList benefits={benefit.list} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
