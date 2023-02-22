import { FC, PropsWithChildren } from "react";
import { Effect } from "./components/Effect/Effect";
import { Benefit } from "./components/Benefit/Benefit";
import { Synapse } from "./components/Synapse/Synapse";
import { Train } from "./components/Train/Train";

export const StartPage: FC<PropsWithChildren> = () => {
  return (
    <>
      <Train />
      <div id="startPage">
        <Effect />
        <Benefit />
        <Synapse />
      </div>
    </>
  );
};
