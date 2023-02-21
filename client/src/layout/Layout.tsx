import { FC, PropsWithChildren } from "react";
import { Footer, Header } from "../components";

interface LayoutProps {
  isAuth?: boolean;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, isAuth }) => {
  return (
    <>
      <Header isAuth={isAuth} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
