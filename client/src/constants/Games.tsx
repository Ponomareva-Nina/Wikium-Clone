import { ColorMatchGame } from "../games/ColorMatchGame/ColorMatchGame";
import { PenaltyGame } from "../games/PenaltyGame/PenaltyGame";
import { LessOrMoreGame } from "../games/LessOrMoreGame/LessOrMoreGame";
import { GameInterface } from "../interfaces/GameInterface";
import colorMatchImg from "../assets/images/GamesPage/color-match.svg";
import penaltyImg from "../assets/images/GamesPage/penalty.svg";
import moreAndLessImg from "../assets/images/GamesPage/more-and-less.svg";

export const enum GamesId {
  FIRST,
  SECOND,
  THIRD,
}

const INITIAL_NEURONS_NUMBER = 5;

export const games: Array<GameInterface> = [
  {
    id: GamesId.FIRST,
    title: "colorMatch",
    gamePage: <ColorMatchGame />,
    teaserImg: colorMatchImg,
    category: "concentration",
    neurons: INITIAL_NEURONS_NUMBER,
  },
  {
    id: GamesId.SECOND,
    title: "penalty",
    gamePage: <PenaltyGame />,
    teaserImg: penaltyImg,
    category: "memory",
    neurons: INITIAL_NEURONS_NUMBER,
  },
  {
    id: GamesId.THIRD,
    title: "lessOrMore",
    gamePage: <LessOrMoreGame />,
    teaserImg: moreAndLessImg,
    category: "logics",
    neurons: INITIAL_NEURONS_NUMBER,
  },
];
