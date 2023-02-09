import { ColorMatchGame } from "../games/ColorMatchGame/ColorMatchGame";
import { PenaltyGame } from "../games/PenaltyGame/PenaltyGame";
import { LessOrMoreGame } from "../games/LessOrMoreGame/LessOrMoreGame";
import { GameInterface } from "../interfaces/GameInterface";
import colorMatchImg from "../assets/images/GamesPage/color-match.svg";
import penaltyImg from "../assets/images/GamesPage/penalty.svg";
import moreAndLessImg from "../assets/images/GamesPage/more-and-less.svg";
import { GameCategories } from "../interfaces/Categories";

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
    category: GameCategories.CONCENTRATION,
    neurons: INITIAL_NEURONS_NUMBER,
  },
  {
    id: GamesId.SECOND,
    title: "penalty",
    gamePage: <PenaltyGame />,
    teaserImg: penaltyImg,
    category: GameCategories.MEMORY,
    neurons: INITIAL_NEURONS_NUMBER,
  },
  {
    id: GamesId.THIRD,
    title: "lessOrMore",
    gamePage: <LessOrMoreGame />,
    teaserImg: moreAndLessImg,
    category: GameCategories.LOGICS,
    neurons: INITIAL_NEURONS_NUMBER,
  },
];
