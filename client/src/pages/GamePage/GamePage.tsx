import { useParams } from "react-router-dom";
import { ColorMatchGame } from "../../games/ColorMatchGame/ColorMatchGame";
import { PenaltyGame } from "../PenaltyGame/PenaltyGame";
import { LessOrMoreGame } from "../../games/LessOrMoreGame/LessOrMoreGame";

const GameRoutes = [
  {
    gameId: 1,
    gamePage: <ColorMatchGame />,
  },
  {
    gameId: 2,
    gamePage: <PenaltyGame />,
  },
  {
    gameId: 3,
    gamePage: <LessOrMoreGame />,
  },
];

export const GamePage = () => {
  const { id } = useParams();
  const currentGame = GameRoutes.find((game) => game.gameId === Number(id));
  return currentGame ? currentGame.gamePage : <h1>Game not found</h1>;
};
