import { FC } from "react";
import { useCounter } from "../../../../hooks/useCounter";
import { GameProps } from "../../../../interfaces/GameInterface";

import { GameField } from "./GameField/GameField";
import { StartCounter } from "./StartCounter/StartCounter";

const GamePage: FC<GameProps> = ({ finishGame }) => {
  const count = useCounter({ isReverse: true, initialValue: 3 });

  if (count > 0) {
    return <StartCounter count={count} />;
  }

  return <GameField finishGame={finishGame} />;
};
export default GamePage;
