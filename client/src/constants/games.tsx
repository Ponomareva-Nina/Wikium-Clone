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
import schemeIcon from "../assets/images/GamesIcons/scheme-icon.svg";
import pictureIcon from "../assets/images/GamesIcons/picture-icon.svg";
import CalcIcon from "../assets/images/LessOrMoreIcons/calc.svg";
import CircleIcon from "../assets/images/LessOrMoreIcons/circle.svg";
import EyeIcon from "../assets/images/LessOrMoreIcons/eye.svg";
import colorMatchIcon from "../assets/images/GamesIcons/color-match-icon.svg";
import lessOrMoreIcon from "../assets/images/GamesIcons/more-and-less-icon.svg";
import rememberOrderIcon from "../assets/images/GamesIcons/remember-order-icon.svg";

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
    gameIcon: colorMatchIcon,
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
    title: "rememberOrder.title",
    gamePage: RememberOrderGame,
    teaserImg: rememberImg,
    category: GameCategories.MEMORY,
    neurons: INITIAL_NEURONS_NUMBER,
    description: "rememberOrder.description",
    gameIcon: rememberOrderIcon,
    skills: [
      {
        title: "rememberOrder.memorySkill",
        description: "rememberOrder.memorySkillDescription",
        icon: schemeIcon,
      },
      {
        title: "rememberOrder.shortMemorySkill",
        description: "rememberOrder.shortMemorySkillDescription",
        icon: pictureIcon,
      },
      {
        title: "rememberOrder.attentionSkill",
        description: "rememberOrder.attentionSkillDescription",
        icon: SearchIcon,
      },
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
    gameIcon: lessOrMoreIcon,
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
