import { useParams } from "react-router-dom";
import { games } from "../../constants/games";

export const GamePage = () => {
  const { id } = useParams();
  const currentGame = games.find((game) => game.id === Number(id));
  return currentGame ? currentGame.gamePage : <h1>Game not found</h1>;
};
