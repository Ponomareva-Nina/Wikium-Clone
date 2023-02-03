import { FC, PropsWithChildren } from "react";
import styles from "./Form.module.scss";

interface FormProps {
  title?: string;
}

export const Form: FC<PropsWithChildren<FormProps>> = ({ title = "", children, ...rest }) => {
  return (
    <form {...rest} className={styles.container} onSubmit={(e) => e.preventDefault()}>
      <h2 className={styles.title}> {title} </h2>
      {children}
    </form>
  );
};
