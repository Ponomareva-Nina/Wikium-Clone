import { ColorMatchGame } from "../games/ColorMatchGame/ColorMatchGame";
import { PenaltyGame } from "../games/PenaltyGame/PenaltyGame";
import { LessOrMoreGame } from "../games/LessOrMoreGame/LessOrMoreGame";
import { GameInterface } from "../interfaces/GameInterface";
import colorMatchImg from "../assets/images/GamesPage/color-match.svg";
import penaltyImg from "../assets/images/GamesPage/penalty.svg";
import moreAndLessImg from "../assets/images/GamesPage/more-and-less.svg";
import { GameCategories } from "../interfaces/Categories";
import CalcIcon from "../assets/images/LessOrMoreIcons/calc.svg";
import CircleIcon from "../assets/images/LessOrMoreIcons/circle.svg";
import EyeIcon from "../assets/images/LessOrMoreIcons/eye.svg";

export const enum GamesId {
  FIRST,
  SECOND,
  THIRD,
}

const INITIAL_NEURONS_NUMBER = 5;

export const games: Array<GameInterface> = [
  {
    id: GamesId.FIRST,
    title: "colorMatchGame.title",
    gamePage: ColorMatchGame,
    teaserImg: colorMatchImg,
    category: GameCategories.CONCENTRATION,
    neurons: INITIAL_NEURONS_NUMBER,
    description: "colorMatchGame.description",
    skills: [
      { title: "First title", description: "First description", icon: CalcIcon },
      { title: "Second title", description: "Second description", icon: CircleIcon },
      { title: "Third title", description: "Third description", icon: EyeIcon },
    ],
  },
  {
    id: GamesId.SECOND,
    title: "penaltyGame.title",
    gamePage: PenaltyGame,
    teaserImg: penaltyImg,
    category: GameCategories.MEMORY,
    neurons: INITIAL_NEURONS_NUMBER,
    description: "penaltyGame.description",
    skills: [
      { title: "First title", description: "First description", icon: CalcIcon },
      { title: "Second title", description: "Second description", icon: CircleIcon },
      { title: "Third title", description: "Third description", icon: EyeIcon },
    ],
  },
  {
    id: GamesId.THIRD,
    title: "lessOrMoreGame.title",
    gamePage: LessOrMoreGame,
    teaserImg: moreAndLessImg,
    category: GameCategories.LOGICS,
    neurons: INITIAL_NEURONS_NUMBER,
    description: "lessOrMoreGame.description",
    skills: [
      {
        title: "lessOrMoreGame.firstSkillTitle",
        description: "lessOrMoreGame.firstSkillDescription",
        icon: CalcIcon,
      },
      {
        title: "lessOrMoreGame.secondSkillTitle",
        description: "lessOrMoreGame.secondSkillDescription",
        icon: CircleIcon,
      },
      {
        title: "lessOrMoreGame.thirdSkillTitle",
        description: "lessOrMoreGame.thirdSkillDescription",
        icon: EyeIcon,
      },
    ],
  },
];
