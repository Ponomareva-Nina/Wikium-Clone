import { FC } from "react";
import styles from "./InfoItem.module.scss";

interface InfoItemProps {
  title: string;
  value: string | number;
}

export const InfoItem: FC<InfoItemProps> = ({ title, value }) => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>{title}:</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};
