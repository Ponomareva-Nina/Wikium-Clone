import { Navigate, useParams } from "react-router-dom";
import { games } from "../../constants/gamesData";
import { GameLayout } from "../../layout/GameLayout/GameLayout";

export const GamePage = () => {
  const { id } = useParams();
  const currentGame = games.find((game) => game.id === Number(id));

  if (!currentGame) {
    return <Navigate to="/games" replace />;
  }

  const Component = currentGame.gamePage;

  return (
    <GameLayout game={currentGame}>
      <Component />
    </GameLayout>
  );
};
