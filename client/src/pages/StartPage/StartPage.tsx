import { FC, PropsWithChildren } from "react";
import { Effect } from "./components/Effect/Effect";
import { Benefit } from "./components/Benefit/Benefit";
import { Synapse } from "./components/Synapse/Synapse";

interface StartPageProps {
  isAuth?: boolean;
}

export const StartPage: FC<PropsWithChildren<StartPageProps>> = ({ isAuth }) => {
  return (
    <div id="startPage">
      <Effect isAuth={isAuth} />
      <Benefit />
      <Synapse isAuth={isAuth} />
    </div>
  );
};
