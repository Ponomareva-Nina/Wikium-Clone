import { ColorMatchGame } from "../games/ColorMatchGame/ColorMatchGame";
import { PenaltyGame } from "../games/PenaltyGame/PenaltyGame";
import { LessOrMoreGame } from "../games/LessOrMoreGame/LessOrMoreGame";
import { GameInterface } from "../interfaces/GameInterface";

export const Games: Array<GameInterface> = [
  {
    gameId: 1,
    gamePage: <ColorMatchGame />,
    category: "concentration",
    neurons: 5,
  },
  {
    gameId: 2,
    gamePage: <PenaltyGame />,
    category: "memory",
    neurons: 5,
  },
  {
    gameId: 3,
    gamePage: <LessOrMoreGame />,
    category: "logics",
    neurons: 5,
  },
];
