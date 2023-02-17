import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import styles from "./Field.module.scss";

interface FieldProps {
  description: string;
}

export const Field: FC<PropsWithChildren<FieldProps>> = ({ description, children }) => {
  return (
    <div className={cn(styles.field_container)}>
      <p className={cn(styles.field_description)}>{description}</p>
      <div className={cn(styles.field)}>{children}</div>
    </div>
  );
};
