import { useParams } from "react-router-dom";
import { Games } from "../../constants/Games";

export const GamePage = () => {
  const { id } = useParams();
  const currentGame = Games.find((game) => game.id === Number(id));
  return currentGame ? currentGame.gamePage : <h1>Game not found</h1>;
};
