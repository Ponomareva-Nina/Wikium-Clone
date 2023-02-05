import { FC, PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./Form.module.scss";

interface FormProps {
  title?: string;
  appearance?: "fit-width" | "full-width";
}

export const Form: FC<PropsWithChildren<FormProps>> = ({
  title = "",
  appearance = "full-width",
  children,
  ...rest
}) => {
  return (
    <form
      {...rest}
      className={cn(styles.container, styles[appearance])}
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 className={styles.title}> {title} </h2>
      {children}
    </form>
  );
};
