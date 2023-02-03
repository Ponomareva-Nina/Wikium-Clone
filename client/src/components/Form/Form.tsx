import { FC, PropsWithChildren } from "react";
import { FormProps } from "react-router-dom";

export const Form: FC<PropsWithChildren<FormProps>> = ({ children, ...rest }) => {
  return (
    <form {...rest} onSubmit={(e) => e.preventDefault()}>
      {children}
    </form>
  );
};
