import { FC, FormEvent, PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./Form.module.scss";

interface FormProps {
  title?: string;
  appearance?: "fit-width" | "full-width";
  formHandler: () => void;
}

export const Form: FC<PropsWithChildren<FormProps>> = ({
  title = "",
  appearance = "full-width",
  children,
  formHandler,
  ...rest
}) => {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    formHandler();
  };
  return (
    <form {...rest} className={cn(styles.container, styles[appearance])} onSubmit={submitHandler}>
      <h2 className={styles.title}> {title} </h2>
      {children}
    </form>
  );
};
