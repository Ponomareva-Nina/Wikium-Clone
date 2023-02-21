import { FC, PropsWithChildren } from "react";
import { Effect } from "./components/Effect/Effect";
import { Benefit } from "./components/Benefit/Benefit";
import { Synapse } from "./components/Synapse/Synapse";
import { Train } from "./components/Train/Train";

interface StartPageProps {
  isAuth?: boolean;
}

export const StartPage: FC<PropsWithChildren<StartPageProps>> = ({ isAuth }) => {
  return (
    <>
      <Train isAuth={isAuth} />
      <div id="startPage">
        <Effect isAuth={isAuth} />
        <Benefit />
        <Synapse isAuth={isAuth} />
      </div>
    </>
  );
};
