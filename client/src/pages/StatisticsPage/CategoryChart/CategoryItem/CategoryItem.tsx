import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./CategoryItem.module.scss";

interface CategoryItemProps {
  color: string;
  title: string;
  totalNeuronsNumber: number;
  neurons: number;
}

export const CategoryItem: FC<CategoryItemProps> = ({
  color,
  title,
  neurons,
  totalNeuronsNumber,
}) => {
  const { t } = useTranslation();
  const percentage = Math.round((neurons / totalNeuronsNumber) * 100);
  const progressBarFill = {
    background: `linear-gradient(90deg, #8f4af9 ${percentage}%, rgba(179, 179, 179, 0.5) ${percentage}%)`,
  };

  return (
    <div className={styles.category}>
      <div className={styles.category_top_section}>
        <span className={styles.color_indicator} style={{ backgroundColor: color }} />
        <p className={styles.title}>{t(title)}</p>
      </div>
      <span className={styles.neurons}>
        {neurons} {t("StatisticsPage.neurons")}
      </span>
      <span className={styles.progress_bar} style={progressBarFill} />
    </div>
  );
};
