import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import styles from "./BenefitsList.module.scss";

interface BenefitsListProps {
  benefits: Array<string>;
}

export const BenefitsList: FC<PropsWithChildren<BenefitsListProps>> = ({ benefits }) => {
  const { t } = useTranslation();

  return (
    <ul className={cn(styles.item_description)}>
      {benefits.map((item) => (
        <li key={item}>
          <p>{t(item)}</p>
        </li>
      ))}
    </ul>
  );
};
