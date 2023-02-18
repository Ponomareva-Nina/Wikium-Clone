import { FC, PropsWithChildren } from "react";
import { Footer, Header } from "../components";
import { Train } from "../pages/StartPage/components/Train/Train";
import { StartPage } from "../pages/StartPage/StartPage";

interface LayoutProps {
  isAuth?: boolean;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, isAuth }) => {
  return (
    <>
      {isAuth ? <Header isAuth={isAuth} /> : <Train />}
      <main>{children}</main>
      <Footer />
    </>
  );
};
