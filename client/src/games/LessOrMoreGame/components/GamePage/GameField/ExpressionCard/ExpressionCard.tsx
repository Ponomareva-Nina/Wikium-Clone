import { FC } from "react";

import styles from "./ExpressionCard.module.scss";

interface ExpressionCardProps {
  value: string;
}

export const ExpressionCard: FC<ExpressionCardProps> = ({ value }) => {
  return <div className={styles.wrapper}>{value}</div>;
};
