import { ColorMatchGame } from "../games/ColorMatchGame/ColorMatchGame";
import { PenaltyGame } from "../games/PenaltyGame/PenaltyGame";
import { LessOrMoreGame } from "../games/LessOrMoreGame/LessOrMoreGame";
import { GameInterface } from "../interfaces/GameInterface";
import colorMatchImg from "../assets/images/GamesPage/color-match.svg";
import penaltyImg from "../assets/images/GamesPage/penalty.svg";
import moreAndLessImg from "../assets/images/GamesPage/more-and-less.svg";

export const Games: Array<GameInterface> = [
  {
    id: 1,
    title: "colorMatch",
    gamePage: <ColorMatchGame />,
    teaserImg: colorMatchImg,
    category: "concentration",
    neurons: 5,
  },
  {
    id: 2,
    title: "penalty",
    gamePage: <PenaltyGame />,
    teaserImg: penaltyImg,
    category: "memory",
    neurons: 5,
  },
  {
    id: 3,
    title: "lessOrMore",
    gamePage: <LessOrMoreGame />,
    teaserImg: moreAndLessImg,
    category: "logics",
    neurons: 5,
  },
];
