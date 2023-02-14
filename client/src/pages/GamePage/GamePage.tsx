import { useParams } from "react-router-dom";
import { games } from "../../constants/games";
import { GameLayout } from "../../layout/GameLayout/GameLayout";

export const GamePage = () => {
  const { id } = useParams();
  const currentGame = games.find((game) => game.id === Number(id));

  if (!currentGame) {
    return <h1>Game not found</h1>;
  }

  const Component = currentGame.gamePage;

  return (
    <GameLayout game={currentGame}>
      <Component />
    </GameLayout>
  );
};
