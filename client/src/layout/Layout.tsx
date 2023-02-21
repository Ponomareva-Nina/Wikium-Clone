import { FC, PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header } from "../components";
import { Train } from "../pages/StartPage/components/Train/Train";

interface LayoutProps {
  isAuth?: boolean;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, isAuth }) => {
  const loaction = useLocation();

  return (
    <>
      {loaction.pathname !== "/" ? <Header isAuth={isAuth} /> : <> </>}
      <main>{children}</main>
      <Footer />
    </>
  );
};
