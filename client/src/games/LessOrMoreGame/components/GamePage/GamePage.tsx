import { useCounter } from "../../../../hooks/useCounter";
import { GameField } from "./GameField/GameField";
import { StartCounter } from "./StartCounter/StartCounter";

const GamePage = () => {
  const count = useCounter({ isReverse: true, initialValue: 3 });

  if (count > 0) {
    return <StartCounter count={count} />;
  }

  return <GameField />;
};
export default GamePage;
