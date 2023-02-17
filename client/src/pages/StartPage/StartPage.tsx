import { Effect } from "./components/Effect/Effect";
import { Benefit } from "./components/Benefit/Benefit";
import { Synapse } from "./components/Synapse/Synapse";

export const StartPage = () => {
  return (
    <div id="startPage">
      <Effect />
      <Benefit />
      <Synapse />
    </div>
  );
};
