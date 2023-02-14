import { ColorMatchGame } from "../games/ColorMatchGame/ColorMatchGame";
import { LessOrMoreGame } from "../games/LessOrMoreGame/LessOrMoreGame";
import { GameInterface } from "../interfaces/GameInterface";
import colorMatchImg from "../assets/images/GamesPage/color-match.svg";
import rememberImg from "../assets/images/GamesPage/remember-order.svg";
import moreAndLessImg from "../assets/images/GamesPage/more-and-less.svg";
import { GameCategories } from "../interfaces/Categories";
import SearchIcon from "../assets/images/GamesIcons/search-icon.svg";
import { RememberOrderGame } from "../games/RememberOrderGame/RememberOrder";
import LampIcon from "../assets/images/GamesIcons/lamp-icon.svg";
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
    title: "ColorMatchGame.title",
    gamePage: ColorMatchGame,
    teaserImg: colorMatchImg,
    category: GameCategories.CONCENTRATION,
    neurons: INITIAL_NEURONS_NUMBER,
    description: "ColorMatchGame.description",
    skills: [
      {
        title: "ColorMatchGame.attentionSkill",
        description: "ColorMatchGame.attentionSkillDescription",
        icon: SearchIcon,
      },
      {
        title: "ColorMatchGame.visualPerceptionSkill",
        description: "ColorMatchGame.visualPerceptionSkillDescription",
        icon: EyeIcon,
      },
      {
        title: "ColorMatchGame.creativeThinkSkill",
        description: "ColorMatchGame.creativeThinkSkillDescription",
        icon: LampIcon,
      },
    ],
  },
  {
    id: GamesId.SECOND,
    title: "penaltyGame.title",
    gamePage: RememberOrderGame,
    teaserImg: rememberImg,
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
      { title: "First title", description: "First description", icon: CalcIcon },
      { title: "Second title", description: "Second description", icon: CircleIcon },
      { title: "Third title", description: "Third description", icon: EyeIcon },
    ],
  },
];
