import CorrectIcon from "../../../assets/images/LessOrMoreIcons/correct.svg";
import IncorrectIcon from "../../../assets/images/LessOrMoreIcons/incorrect.svg";
import { Expressions } from "../types/game-data.interface";

export const COUNT_POINT = 20;
export const MAX_CORRECT_ANSWER = 24;
export const MIN_CORRECT_ANSWER = 0;

export const checkIcons = {
  correct: CorrectIcon,
  incorrect: IncorrectIcon,
};

export const initialExpressionsValue: Expressions = {
  left: "",
  right: "",
};
