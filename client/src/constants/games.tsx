import { ColorMatchGame } from "../games/ColorMatchGame/ColorMatchGame";
import { LessOrMoreGame } from "../games/LessOrMoreGame/LessOrMoreGame";
import { GameInterface } from "../interfaces/GameInterface";
import colorMatchImg from "../assets/images/GamesPage/color-match.svg";
import rememberImg from "../assets/images/GamesPage/remember-order.svg";
import moreAndLessImg from "../assets/images/GamesPage/more-and-less.svg";
import { GameCategories } from "../interfaces/Categories";
import schemeIcon from "../assets/images/GamesIcons/scheme-icon.svg";
import pictureIcon from "../assets/images/GamesIcons/picture-icon.svg";
import searchIcon from "../assets/images/GamesIcons/search-icon.svg";
import { RememberOrderGame } from "../games/RememberOrderGame/RememberOrder";
import eyeIcon from "../assets/images/GamesIcons/eye-icon.svg";
import lampIcon from "../assets/images/GamesIcons/lamp-icon.svg";

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
    description: "description",
    skills: [
      { attentionSkill: "attentionSkillDescription", iconSrc: searchIcon },
      { visualPerceptionSkill: "visualPerceptionSkillDescription", iconSrc: eyeIcon },
      { creativeThinkSkill: "creativeThinkSkillDescription", iconSrc: lampIcon },
    ],
  },
  {
    id: GamesId.SECOND,
    title: "rememberOrder",
    gamePage: <RememberOrderGame />,
    teaserImg: rememberImg,
    category: GameCategories.MEMORY,
    neurons: INITIAL_NEURONS_NUMBER,
    description: "description",
    skills: [
      { memorySkill: "memorySkillDescription", iconSrc: schemeIcon },
      { shortMemorySkill: "shortMemorySkillDescription", iconSrc: pictureIcon },
      { attentionSkill: "attentionSkillDescription", iconSrc: searchIcon },
    ],
  },
  {
    id: GamesId.THIRD,
    title: "lessOrMore",
    gamePage: <LessOrMoreGame />,
    teaserImg: moreAndLessImg,
    category: GameCategories.LOGICS,
    neurons: INITIAL_NEURONS_NUMBER,
    description: "",
    skills: [],
  },
];
